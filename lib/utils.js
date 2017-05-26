'use strict';

const fs = require('fs');
const path = require('path');

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
 * Find local .eslintrc file.
 *
 * @example utils.findESLintConfigFile(input).then((path) => console.log(path));
 * @param {String} input Directory or file.
 * @return {Object} Promise
 * @public
 */

const findESLintConfigFile = input => new Promise(resolve => {

    const localConfigPath = path.resolve(path.join(input, '.eslintrc'));

    fs.stat(localConfigPath, err => {

        if (err) {

            resolve(path.resolve(path.join(__dirname, '..', '.eslintrc')));

        } else {

            resolve(localConfigPath);

        }

    });

});

module.exports = {
    findESLintConfigFile,
    parseWatchPath
};
