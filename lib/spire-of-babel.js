'use strict';

const path = require('path');

const babel = require('babel-core');
const browserify = require('browserify');

const babelify = require('babelify');
const es2015 = require('babel-preset-es2015');
const react = require('babel-preset-react');

const OPTION_DEFAULTS = {
    'bundle': false,
    'output': null,
    'watch': null,
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

        let code = `${result.code}\n`;
        const map = `${JSON.stringify(result.map)}\n`;

        if (settings.sourcemap && settings.output) {

            code = `${code}//# sourceMappingURL=${settings.output}.map`;

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
 * @return {Object} Promise
 * @public
 */

const transformFileWithBrowserify = (file) => new Promise((resolve, reject) => {

    browserify(file)
        .transform(babelify, {
            'presets': [es2015, react]
        })
        .bundle((err, buffer) => {

            if (err) {

                return reject(new Error(err));

            }

            return resolve({
                'code': buffer.toString()
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

        return transformFileWithBrowserify(file);

    }

    return transformFileWithBabel(file, options);

};

/**
 * Parses a path into directory and filename or file regular expression pattern.
 *
 * @example console.log(spire.parseWatchPath(input));
 * @param {String} input Path to parse.
 * @return {Object} Object with directory, filename (pattern) and boolean flag.
 * @public
 */

const parseWatchPath = (input) => {

    let directory = null;
    let filename = null;

    let recursive = false;
    const recursivePattern = /\/\*\*\/\/*/;

    if (input.match(recursivePattern)) {

        recursive = true;

    }

    directory = path.dirname(input.replace(recursivePattern, '/'));
    filename = path.basename(input).replace(/^\*/, '');

    return {
        directory,
        filename,
        recursive
    };

};

module.exports = {
    transformFileWithBabel,
    transformFileWithBrowserify,
    transformFile,
    parseWatchPath
};
