'use strict';

const fs = require('fs');
const assert = require('assert');

const spire = require('../../lib/spire-of-babel');

describe('transformFile with babel (sourcemap)', () => {

    it('sourcemap output code', done => {

        spire.transformFile('./test/fixtures/original/sourcemap.js', {
            'output': './test/fixtures/transformed/sourcemap.js',
            'sourcemap': true
        }).then(result => {

            fs.readFile('./test/fixtures/transformed/sourcemap.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('sourcemap output map', done => {

        spire.transformFile('./test/fixtures/original/sourcemap.js', {
            'output': './test/fixtures/transformed/sourcemap.js',
            'sourcemap': true
        }).then(result => {

            fs.readFile('./test/fixtures/transformed/sourcemap.js.map', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.map, fixture);

                done();

            });

        });

    });

    it('sourcemap inline code/map', done => {

        spire.transformFile('./test/fixtures/original/sourcemap.js', {'sourcemap': true}).then(result => {

            fs.readFile('./test/fixtures/transformed/sourcemap_inline.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('bundled sourcemap output code', done => {

        spire.transformFile('./test/fixtures/original/sourcemap_bundle.js', {
            'bundle': true,
            'output': './test/fixtures/transformed/sourcemap_bundle.js',
            'sourcemap': true
        }).then(result => {

            fs.readFile('./test/fixtures/transformed/sourcemap_bundle.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('bundled sourcemap output map', done => {

        spire.transformFile('./test/fixtures/original/sourcemap_bundle.js', {
            'bundle': true,
            'output': './test/fixtures/transformed/sourcemap_bundle.js',
            'sourcemap': true
        }).then(result => {

            let testOutputFile = './test/fixtures/transformed/sourcemap_bundle.js.map';

            if (process.env.APPVEYOR) {

                testOutputFile = './test/fixtures/transformed/windows/sourcemap_bundle.js.map';

            }

            fs.readFile(testOutputFile, 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.map, fixture);

                done();

            });

        });

    });

    it('bundled sourcemap inline', done => {

        spire.transformFile('./test/fixtures/original/sourcemap_bundle.js', {
            'bundle': true,
            'sourcemap': true
        }).then(result => {

            let testOutputFile = './test/fixtures/transformed/sourcemap_bundle_inline.js';

            if (process.env.APPVEYOR) {

                testOutputFile = './test/fixtures/transformed/windows/sourcemap_bundle_inline.js';

            }

            fs.readFile(testOutputFile, 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

});
