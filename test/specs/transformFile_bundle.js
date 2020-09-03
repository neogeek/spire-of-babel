'use strict';

const fs = require('fs');
const assert = require('assert');

const spire = require('../../lib/spire-of-babel');

describe('transformFile with babel (bundle)', () => {
    it('error while transforming with bundle flag', done => {
        spire
            .transformFile('./test/fixtures/original/error.js', {
                bundle: true
            })
            .catch(() => {
                done();
            });
    });

    it('bundle', done => {
        spire
            .transformFile('./test/fixtures/original/bundle.js', {
                bundle: true
            })
            .then(result => {
                fs.readFile(
                    './test/fixtures/transformed/bundle.js',
                    'utf8',
                    (err, fixture) => {
                        if (err) {
                            throw err;
                        }

                        assert.equal(result.code, fixture);

                        done();
                    }
                );
            });
    });
});
