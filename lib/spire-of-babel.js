'use strict';

const path = require('path');

const atob = require('atob');

const chalk = require('chalk');

const babel = require('babel-core');
const browserify = require('browserify');
const babelify = require('babelify');
const envify = require('envify');

const react = require('babel-preset-react');
const minify = require('babel-preset-minify');

const flowStripTypes = require('babel-plugin-transform-flow-strip-types');
const flowSyntax = require('babel-plugin-syntax-flow');

const CLIEngine = require('eslint').CLIEngine;

const ESLINT_SEVERITY = {
    '1': chalk.yellow('warning'),
    '2': chalk.red('error')
};

const sourceMapPattern = /\/\/# sourceMappingURL=data:application\/json;charset=utf-8;base64,(.*)/;
const sourceMapPatternMatchIndex = 1;

const OPTION_DEFAULTS = {
    'bundle': false,
    'minify': false,
    'output': null,
    'presets': 'es2015',
    'sourcemap': false
};

const PRESET_DEFAULTS = [react];

/**
 * Creates array of presets based on user settings.
 *
 * @example spire.createPresetArray({'presets': 'es2015', 'minify': true});
 * @param {Object} settings Settings object.
 * @param {String} settings.presets Custom presets to load. Comma delimited value.
 * @param {Boolean} settings.minify Minify output.
 * @return {Array}
 * @public
 */

const createPresetArray = settings => {

    const presets = PRESET_DEFAULTS.slice();

    settings.presets.split(/\s*,\s*/).map(preset => {

        try {

            presets.push(require(`babel-preset-${preset}`));

        } catch (err) {

            process.stderr.write(`Package babel-preset-${preset} not installed.\n`);

        }

        return false;

    });

    if (settings.minify) {

        presets.push(minify);

    }

    return presets;

};

/**
 * Transforms a file with babel.
 *
 * @example spire.transformFileWithBabel(file).then(function (result) { console.log(result); });
 * @param {String} file File path.
 * @param {Object} [options] Options object.
 * @param {Boolean} [options.sourcemap] Generate sourcemap.
 * @param {Boolean} [options.minify] Minify output.
 * @return {Object} Promise
 * @public
 */

const transformFileWithBabel = (file, options) =>
    new Promise((resolve, reject) => {

        const settings = Object.assign({}, OPTION_DEFAULTS, options);

        let sourceMaps = false;

        if (settings.sourcemap) {

            if (settings.output) {

                sourceMaps = true;

            } else {

                sourceMaps = 'inline';

            }

        }

        babel.transformFile(
            file,
            {
                'comments': false,
                'plugins': [
                    flowSyntax,
                    flowStripTypes
                ],
                'presets': createPresetArray(settings),
                sourceMaps
            },
            (err, result) => {

                if (err) {

                    return reject(new Error(err));

                }

                let code = `${result.code.trim()}\n`;
                let map = null;

                if (sourceMaps) {

                    map = `${JSON.stringify(result.map)}\n`;

                    if (settings.output) {

                        code = `${code}//# sourceMappingURL=${path.basename(
                            settings.output
                        )}.map\n`;

                    }

                }

                return resolve({
                    code,
                    map
                });

            }
        );

    });

/**
 * Transforms a file with browserify.
 *
 * @example spire.transformFileWithBrowserify(file).then(function (result) { console.log(result); });
 * @param {String} file File path.
 * @param {Object} [options] Options object.
 * @param {Boolean} [options.output] Path to save transformed file to.
 * @param {Boolean} [options.sourcemap] Generate sourcemap.
 * @param {Boolean} [options.minify] Minify output.
 * @return {Object} Promise
 * @public
 */

const transformFileWithBrowserify = (file, options) =>
    new Promise((resolve, reject) => {

        const settings = Object.assign({}, OPTION_DEFAULTS, options);

        const debug = settings.sourcemap;

        const extensions = [
            '.js',
            '.es',
            '.es6',
            '.jsx',
            '.ts',
            '.tsx'
        ];

        browserify(file, {
            debug,
            extensions
        })
            .transform(envify, {
                'NODE_ENV': process.env.NODE_ENV || 'development'
            })
            .transform(babelify, {
                'comments': false,
                extensions,
                'plugins': [
                    flowSyntax,
                    flowStripTypes
                ],
                'presets': createPresetArray(settings)
            })
            .bundle((err, buffer) => {

                if (err) {

                    return reject(new Error(err));

                }

                let code = `${buffer.toString().trim()}\n`;
                let map = null;

                if (debug) {

                    map = atob(sourceMapPattern.exec(code)[sourceMapPatternMatchIndex]);

                    if (settings.output) {

                        code = code.replace(
                            sourceMapPattern,
                            `//# sourceMappingURL=${path.basename(settings.output)}.map\n`
                        );

                    }

                }

                return resolve({
                    code,
                    map
                });

            });

    });

/**
 * Transforms a file.
 *
 * @example spire.transformFile(file, options).then(function (result) { console.log(result); });
 * @param {String} file File path.
 * @param {Object} [options] Options object.
 * @param {Boolean} [options.bundle] Use browserify bundler.
 * @return {Object} Promise
 * @public
 */

const transformFile = (file, options) => {

    const settings = Object.assign({}, OPTION_DEFAULTS, options);

    if (settings.bundle) {

        return transformFileWithBrowserify(file, options);

    }

    return transformFileWithBabel(file, options);

};

/**
 * Lint a file.
 *
 * @example spire.lintFile(file, configFile).then(function (results) { console.log(results); });
 * @param {String} file File path.
 * @param {String} configFile Config file.
 * @return {Object} Promise
 * @public
 */

const lintFile = (file, configFile) =>
    new Promise((resolve, reject) => {

        const cli = new CLIEngine({
            configFile
        });

        const report = cli.executeOnFiles([file]);

        const warningAndErrorCount = report.results.reduce(
            (prev, curr) => prev + curr.warningCount + curr.errorCount,
            0
        );

        if (warningAndErrorCount) {

            const errorMessages = report.results
                .reduce((prev, curr) => {

                    if (curr.messages.length) {

                        prev.push(
                            `\n${chalk.underline(curr.filePath)}\n${curr.messages
                                .map(message => {

                                    const pos = `${message.line}:${message.column}`;

                                    return (
                                        `  ${chalk.grey(pos)}  ` +
                                        `${ESLINT_SEVERITY[message.severity]}\t ` +
                                        `${message.message}\t ${chalk.grey(message.ruleId)}`
                                    );

                                })
                                .join('\n')}`
                        );

                    }

                    return prev;

                }, [])
                .join('\n');

            reject(errorMessages);

        } else {

            resolve();

        }

    });

module.exports = {
    createPresetArray,
    lintFile,
    transformFile,
    transformFileWithBabel,
    transformFileWithBrowserify
};
