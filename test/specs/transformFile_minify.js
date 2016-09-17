'use strict';

const fs = require('fs');
const assert = require('assert');

const spire = require('../../lib/spire-of-babel');

describe('transformFile with babel (minify)', () => {

    it('minified', done => {

        spire.transformFile('./test/fixture/original/minify.js', {
            'minify': true
        }).then(result => {

            fs.readFile('./test/fixture/transformed/minify.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('bundled minified', done => {

        spire.transformFile('./test/fixture/original/minify_bundle.js', {
            'bundle': true,
            'minify': true
        }).then(result => {

            fs.readFile('./test/fixture/transformed/minify_bundle.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

});
