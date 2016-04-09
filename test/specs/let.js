var fs = require('fs');
var assert = require('assert');

var lib = process.env.COVERAGE ? '../../lib-cov' : '../../lib';

var spire = require(lib + '/spire-of-babel');

describe('let', function () {

    it('should transform using babel', function (done) {

        spire.transformFile('./test/fixture/let.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/let.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

});
