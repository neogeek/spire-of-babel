'use strict';

const path = require('path');

/**
 * Parses a path into directory and filename or file regular expression pattern.
 *
 * @example console.log(utils.parseWatchPath(input));
 * @param {String} input Path to parse.
 * @return {Object} Object with directory, filename (pattern) and boolean flag.
 * @public
 */

const parseWatchPath = (input) => {

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

module.exports = {
    parseWatchPath
};
