'use strict';

let babel = require('babel-core');
let browserify = require('browserify');

let babelify = require('babelify');
let es2015 = require('babel-preset-es2015');
let react = require('babel-preset-react');

const TRANSFORM_DEFAULTS = {
    bundle: false
};

/**
 * Transforms a file with babel.
 *
 * @example spire.transformFileWithBabel(file).then(function (result) { console.log(result); });
 * @param {String} file File path.
 * @return {Object} Promise
 * @public
 */

let transformFileWithBabel = function (file) {

    return new Promise(function (resolve, reject) {

        babel.transformFile(file, {
            presets: [es2015]
        }, function (err, result) {

            if (err) { return reject(new Error(err)); }

            resolve(result.code);

        });

    });

}

/**
 * Transforms a file with browserify.
 *
 * @example spire.transformFileWithBrowserify(file).then(function (result) { console.log(result); });
 * @param {String} file File path.
 * @return {Object} Promise
 * @public
 */

let transformFileWithBrowserify = function (file) {

    return new Promise(function (resolve, reject) {

        browserify(file)
            .transform(babelify, {
                presets: [es2015, react]
            })
            .bundle(function (err, buffer) {

                if (err) { return reject(new Error(err)); }

                resolve(buffer.toString());

            });

    });

}

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

let transformFile = function (file, options) {

    let settings = Object.assign({}, TRANSFORM_DEFAULTS, options);

    if (settings.bundle) {

        return transformFileWithBrowserify(file, options);

    } else {

        return transformFileWithBabel(file, options);

    }

};

module.exports = {
    transformFileWithBabel,
    transformFileWithBrowserify,
    transformFile
};
