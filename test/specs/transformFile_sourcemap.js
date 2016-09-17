'use strict';

const fs = require('fs');
const assert = require('assert');

const spire = require('../../lib/spire-of-babel');

describe('transformFile with babel (sourcemap)', () => {

    it('sourcemap output code', done => {

        spire.transformFile('./test/fixture/original/sourcemap.js', {
            'output': './test/fixture/transformed/sourcemap.js',
            'sourcemap': true
        }).then(result => {

            fs.readFile('./test/fixture/transformed/sourcemap.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('sourcemap output map', done => {

        spire.transformFile('./test/fixture/original/sourcemap.js', {
            'output': './test/fixture/transformed/sourcemap.js',
            'sourcemap': true
        }).then(result => {

            fs.readFile('./test/fixture/transformed/sourcemap.js.map', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.map, fixture);

                done();

            });

        });

    });

    it('sourcemap inline code/map', done => {

        spire.transformFile('./test/fixture/original/sourcemap.js', {'sourcemap': true}).then(result => {

            fs.readFile('./test/fixture/transformed/sourcemap_inline.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('bundled sourcemap output code', done => {

        spire.transformFile('./test/fixture/original/sourcemap_bundle.js', {
            'bundle': true,
            'output': './test/fixture/transformed/sourcemap_bundle.js',
            'sourcemap': true
        }).then(result => {

            fs.readFile('./test/fixture/transformed/sourcemap_bundle.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('bundled sourcemap output map', done => {

        spire.transformFile('./test/fixture/original/sourcemap_bundle.js', {
            'bundle': true,
            'output': './test/fixture/transformed/sourcemap_bundle.js',
            'sourcemap': true
        }).then(result => {

            fs.readFile('./test/fixture/transformed/sourcemap_bundle.js.map', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.map, fixture);

                done();

            });

        });

    });

    it('bundled sourcemap inline', done => {

        spire.transformFile('./test/fixture/original/sourcemap_bundle.js', {
            'bundle': true,
            'sourcemap': true
        }).then(result => {

            fs.readFile('./test/fixture/transformed/sourcemap_bundle_inline.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

});
