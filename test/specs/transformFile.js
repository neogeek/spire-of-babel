var fs = require('fs');
var assert = require('assert');

var lib = process.env.COVERAGE ? '../../lib-cov' : '../../lib';

var spire = require(lib + '/spire-of-babel');

describe('transformFile with babel', function () {

    it('bundle', function (done) {

        spire.transformFile('./test/fixture/original/bundle.js', { bundle: true }).then(function (result) {

            fs.readFile('./test/fixture/transformed/bundle.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

    it('const', function (done) {

        spire.transformFile('./test/fixture/original/const.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/const.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

    it('function_default_attribute', function (done) {

        spire.transformFile('./test/fixture/original/function_default_attribute.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/function_default_attribute.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

    it('function_default_attribute_object', function (done) {

        spire.transformFile('./test/fixture/original/function_default_attribute_object.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/function_default_attribute_object.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

    it('function_destruct_attributes', function (done) {

        spire.transformFile('./test/fixture/original/function_destruct_attributes.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/function_destruct_attributes.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

    it('let', function (done) {

        spire.transformFile('./test/fixture/original/let.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/let.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

    it('object_destruct', function (done) {

        spire.transformFile('./test/fixture/original/object_destruct.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/object_destruct.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

    it('object_initialize', function (done) {

        spire.transformFile('./test/fixture/original/object_initialize.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/object_initialize.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

    it('object.assign', function (done) {

        spire.transformFile('./test/fixture/original/object.assign.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/object.assign.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

    it('template_string', function (done) {

        spire.transformFile('./test/fixture/original/template_string.js').then(function (result) {

            fs.readFile('./test/fixture/transformed/template_string.js', 'utf8', function (err, fixture) {

                if (err) { throw err; }

                assert.equal(result, fixture);

                done();

            });

        });

    });

});
