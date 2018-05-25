'use strict';

const fs = require('fs');
const path = require('path');

const DEAFAULT_CONFIG_FILENAME = '.eslintrc';

/**
 * Parses a path into directory and filename or file regular expression pattern.
 *
 * @example console.log(utils.parseWatchPath(input));
 * @param {String} input Path to parse.
 * @return {Object} Object with directory, filename (pattern) and boolean flag.
 * @public
 */

const parseWatchPath = input => {

    const recursivePattern = /\/\*\*\/\/*/;

    const recursive = recursivePattern.test(input);
    const directory = path.dirname(input.replace(recursivePattern, '/'));
    const filename = path.basename(input).replace(/^\*/, '');

    return {
        directory,
        filename,
        recursive
    };

};

/**
 * Find local config file.
 *
 * @example utils.findConfigFile(input).then((path) => console.log(path));
 * @param {String} input Directory or file.
 * @param {String} [filename] Config file name.
 * @return {Object} Promise
 * @public
 */

const findConfigFile = (input, filename) =>
    new Promise(resolve => {

        const localConfigPath = path.resolve(
            path.join(input, filename || DEAFAULT_CONFIG_FILENAME)
        );

        fs.stat(localConfigPath, err => {

            if (err) {

                resolve(
                    path.resolve(path.join(__dirname, '..', filename || DEAFAULT_CONFIG_FILENAME))
                );

            } else {

                resolve(localConfigPath);

            }

        });

    });

module.exports = {
    findConfigFile,
    parseWatchPath
};
