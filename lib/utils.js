'use strict';

const path = require('path');

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
    parseWatchPath
};
