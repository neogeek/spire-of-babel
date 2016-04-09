var fs = require('fs');
var assert = require('assert');

var lib = process.env.COVERAGE ? '../../lib-cov' : '../../lib';

var spire = require(lib + '/spire-of-babel');

describe('const', function () {

    it('should transform using babel', function (done) {

        spire.transformFile('./test/fixture/const.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/const.js', 'utf8', function (err, fixture) {

                assert.equal(result, fixture);

                done();

            });

        });

    });

});
