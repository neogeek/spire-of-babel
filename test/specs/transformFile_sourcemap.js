'use strict';

const fs = require('fs');
const assert = require('assert');

const spire = require('../../lib/spire-of-babel');

describe('transformFile with babel (sourcemap)', () => {

    it('sourcemap inline code/map', done => {

        spire
            .transformFile('./test/fixtures/original/sourcemap.js', {
                'minified': true,
                'sourceMaps': 'inline'
            })
            .then(result => {

                fs.readFile(
                    './test/fixtures/transformed/sourcemap_inline.js',
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
