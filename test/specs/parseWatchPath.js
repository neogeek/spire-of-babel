'use strict';

const assert = require('assert');

const utils = require('../../lib/utils');

describe('parseWatchPath', () => {

    it('basic path', () => {

        assert.deepEqual(utils.parseWatchPath('./test/app.jsx'), {
            'directory': './test',
            'filename': 'app.jsx',
            'recursive': false
        });

    });

    it('path with filename wildcard', () => {

        assert.deepEqual(utils.parseWatchPath('./test/*.jsx'), {
            'directory': './test',
            'filename': '.jsx',
            'recursive': false
        });

    });

    it('path with directory and filename wildcard', () => {

        assert.deepEqual(utils.parseWatchPath('./test/**/*.jsx'), {
            'directory': './test',
            'filename': '.jsx',
            'recursive': true
        });

    });

});
