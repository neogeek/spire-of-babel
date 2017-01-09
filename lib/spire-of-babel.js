'use strict';

const path = require('path');

const atob = require('atob');

const chalk = require('chalk');

const babel = require('babel-core');
const browserify = require('browserify');
const babelify = require('babelify');

const es2015 = require('babel-preset-es2015');
const react = require('babel-preset-react');
const babili = require('babel-preset-babili');

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
    'sourcemap': false
};

const PRESET_DEFAULTS = [es2015, react];

/**
 * Transforms a file with babel.
 *
 * @example spire.transformFileWithBabel(file).then(function (result) { console.log(result); });
 * @param {String} file File path.
 * @param {Object} [options] Options object.
 * @param {Boolean} [options.sourcemap] Generate sourcemap.
 * @return {Object} Promise
 * @public
 */

const transformFileWithBabel = (file, options) => new Promise((resolve, reject) => {

    const settings = Object.assign({}, OPTION_DEFAULTS, options);

    let sourceMaps = false;

    if (settings.sourcemap) {

        if (settings.output) {

            sourceMaps = true;

        } else {

            sourceMaps = 'inline';

        }

    }

    const presets = PRESET_DEFAULTS.slice();

    if (settings.minify) {

        presets.push(babili);

    }

    babel.transformFile(file, {
        'comments': false,
        'plugins': [flowSyntax, flowStripTypes],
        presets,
        sourceMaps
    }, (err, result) => {

        if (err) {

            return reject(new Error(err));

        }

        let code = `${result.code.trim()}\n`;
        let map = null;

        if (sourceMaps) {

            map = `${JSON.stringify(result.map)}\n`;

            if (settings.output) {

                code = `${code}//# sourceMappingURL=${path.basename(settings.output)}.map\n`;

            }

        }

        return resolve({
            code,
            map
        });

    });

});

/**
 * Transforms a file with browserify.
 *
 * @example spire.transformFileWithBrowserify(file).then(function (result) { console.log(result); });
 * @param {String} file File path.
 * @param {Object} [options] Options object.
 * @param {Boolean} [options.output] Path to save transformed file to.
 * @param {Boolean} [options.sourcemap] Generate sourcemap.
 * @return {Object} Promise
 * @public
 */

const transformFileWithBrowserify = (file, options) => new Promise((resolve, reject) => {

    const settings = Object.assign({}, OPTION_DEFAULTS, options);

    const debug = settings.sourcemap;

    const presets = PRESET_DEFAULTS.slice();

    if (settings.minify) {

        presets.push(babili);

    }

    browserify(file, {debug})
        .transform(babelify, {
            'comments': false,
            'plugins': [flowSyntax, flowStripTypes],
            presets
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

const lintFile = (file, configFile) => new Promise((resolve, reject) => {

    const cli = new CLIEngine({
        configFile
    });

    const report = cli.executeOnFiles([file]);

    const warningAndErrorCount = report.results.reduce((prev, curr) =>
        prev + curr.warningCount + curr.errorCount
    , 0);

    if (warningAndErrorCount) {

        const errorMessages = report.results.reduce((prev, curr) => {

            if (curr.messages.length) {

                prev.push(`\n${chalk.underline(curr.filePath)}\n${
                    curr.messages.map(message => {

                        const pos = `${message.line}:${message.column}`;

                        return `  ${chalk.grey(pos)}  ` +
                            `${ESLINT_SEVERITY[message.severity]}\t ` +
                            `${message.message}\t ${chalk.grey(message.ruleId)}`;

                    }).join('\n')}`);

            }

            return prev;

        }, []).join('\n');

        reject(errorMessages);

    } else {

        resolve();

    }

});

module.exports = {
    lintFile,
    transformFile,
    transformFileWithBabel,
    transformFileWithBrowserify
};
