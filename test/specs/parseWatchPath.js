var fs = require('fs');
var assert = require('assert');

var lib = process.env.COVERAGE ? '../../lib-cov' : '../../lib';

var spire = require(lib + '/spire-of-babel');

describe('parseWatchPath', function () {

    it('basic path', function () {

        assert.deepEqual(spire.parseWatchPath('./test/app.jsx'), {
            directory: './test',
            filename: 'app.jsx',
            recursive: false
        });

    });

    it('path with filename wildcard', function () {

        assert.deepEqual(spire.parseWatchPath('./test/*.jsx'), {
            directory: './test',
            filename: '*.jsx',
            recursive: false
        });

    });

    it('path with directory and filename wildcard', function () {

        assert.deepEqual(spire.parseWatchPath('./test/**/*.jsx'), {
            directory: './test',
            filename: '*.jsx',
            recursive: true
        });

    });

});
