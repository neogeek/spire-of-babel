'use strict';

const fs = require('fs');
const assert = require('assert');

const spire = require('../../lib/spire-of-babel');

describe('custom presets', () => {

    it('error while using missing preset', done => {

        spire.transformFile('./test/fixtures/original/presets-env-stage-2.jsx', {
            'presets': 'env,stage-1'
        }).catch(() => {

            done();

        });

    });

    [
        {
            'label': 'env,stage-2',
            'original': './test/fixtures/original/presets-env-stage-2.jsx',
            'transformed': './test/fixtures/transformed/presets-env-stage-2.js'
        }
    ].forEach(file => {

        it(file.label, done => {

            spire.transformFile(file.original, {
                'presets': file.label
            }).then(result => {

                fs.readFile(file.transformed, 'utf8', (err, fixture) => {

                    if (err) {

                        throw err;

                    }

                    assert.equal(result.code, fixture);

                    done();

                });

            });

        });

    });

});
