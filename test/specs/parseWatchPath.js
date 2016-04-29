'use strict';

const fs = require('fs');
const assert = require('assert');

const lib = process.env.COVERAGE ? '../../lib-cov' : '../../lib';

const spire = require(`${lib}/spire-of-babel`);

describe('parseWatchPath', () => {

    it('basic path', () => {

        assert.deepEqual(spire.parseWatchPath('./test/app.jsx'), {
            directory: './test',
            filename: 'app.jsx',
            recursive: false
        });

    });

    it('path with filename wildcard', () => {

        assert.deepEqual(spire.parseWatchPath('./test/*.jsx'), {
            directory: './test',
            filename: '.jsx',
            recursive: false
        });

    });

    it('path with directory and filename wildcard', () => {

        assert.deepEqual(spire.parseWatchPath('./test/**/*.jsx'), {
            directory: './test',
            filename: '.jsx',
            recursive: true
        });

    });

});
