'use strict';

const atob = require('atob');

const chalk = require('chalk');

const babel = require('babel-core');
const browserify = require('browserify');

const babelify = require('babelify');
const es2015 = require('babel-preset-es2015');
const react = require('babel-preset-react');

const CLIEngine = require('eslint').CLIEngine;

const ESLINT_SEVERITY = {
    '1': chalk.yellow('warning'),
    '2': chalk.red('error')
};

const sourceMapPattern = /\/\/# sourceMappingURL=data:application\/json;charset=utf-8;base64,(.*)/;
const sourceMapPatternMatchIndex = 1;

const OPTION_DEFAULTS = {
    'bundle': false,
    'output': null,
    'sourcemap': false
};

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

    let sourceMaps = true;

    if (settings.sourcemap && !settings.output) {

        sourceMaps = 'inline';

    }

    babel.transformFile(file, {
        'presets': [es2015, react],
        sourceMaps
    }, (err, result) => {

        if (err) {

            return reject(new Error(err));

        }

        let code = `${result.code.trim()}\n`;
        let map = null;

        if (settings.sourcemap) {

            map = `${JSON.stringify(result.map)}\n`;

            if (settings.output) {

                code = `${code}//# sourceMappingURL=${settings.output}.map\n`;

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
 * @param {Boolean} [options.sourcemap] Generate sourcemap.
 * @return {Object} Promise
 * @public
 */

const transformFileWithBrowserify = (file, options) => new Promise((resolve, reject) => {

    const settings = Object.assign({}, OPTION_DEFAULTS, options);

    const debug = settings.sourcemap;

    browserify(file, {debug})
        .transform(babelify, {
            'presets': [es2015, react]
        })
        .bundle((err, buffer) => {

            if (err) {

                return reject(new Error(err));

            }

            let code = `${buffer.toString().trim()}\n`;
            let map = null;

            if (settings.sourcemap) {

                map = atob(sourceMapPattern.exec(code)[sourceMapPatternMatchIndex]);

                if (settings.output) {

                    code = code.replace(
                        sourceMapPattern,
                        `//# sourceMappingURL=${settings.output}.map\n`
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
 * @param {Boolean} [options.sourcemap] Generate sourcemap.
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
                    curr.messages.map((message) => {

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
