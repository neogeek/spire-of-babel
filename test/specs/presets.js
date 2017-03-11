'use strict';

const fs = require('fs');
const assert = require('assert');

const spire = require('../../lib/spire-of-babel');

describe('custom presets', () => {

    [
        {
            'label': 'latest,stage-2',
            'original': './test/fixtures/original/presets-latest-stage-2.jsx',
            'transformed': './test/fixtures/transformed/presets-latest-stage-2.js'
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
