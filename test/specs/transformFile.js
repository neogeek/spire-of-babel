'use strict';

const fs = require('fs');
const assert = require('assert');

const spire = require('../../lib/spire-of-babel');

describe('transformFile with babel', () => {

    it('error while transforming', done => {

        spire.transformFile('./test/fixtures/original/error.js').catch(() => {

            done();

        });

    });

    [
        {
            'label': 'let',
            'original': './test/fixtures/original/let.js',
            'transformed': './test/fixtures/transformed/let.js'
        },
        {
            'label': 'const',
            'original': './test/fixtures/original/const.js',
            'transformed': './test/fixtures/transformed/const.js'
        },
        {
            'label': 'Arrays',
            'original': './test/fixtures/original/arrays.js',
            'transformed': './test/fixtures/transformed/arrays.js'
        },
        {
            'label': 'Template String',
            'original': './test/fixtures/original/template_string.js',
            'transformed': './test/fixtures/transformed/template_string.js'
        },
        {
            'label': 'Functions',
            'original': './test/fixtures/original/functions.js',
            'transformed': './test/fixtures/transformed/functions.js'
        },
        {
            'label': 'Classes',
            'original': './test/fixtures/original/classes.js',
            'transformed': './test/fixtures/transformed/classes.js'
        },
        {
            'label': 'Objects',
            'original': './test/fixtures/original/objects.js',
            'transformed': './test/fixtures/transformed/objects.js'
        },
        {
            'label': 'Maps',
            'original': './test/fixtures/original/maps.js',
            'transformed': './test/fixtures/transformed/maps.js'
        },
        {
            'label': 'Sets',
            'original': './test/fixtures/original/sets.js',
            'transformed': './test/fixtures/transformed/sets.js'
        },
        {
            'label': 'Flow',
            'original': './test/fixtures/original/flow.js',
            'transformed': './test/fixtures/transformed/flow.js'
        },
        {
            'label': 'React JSX',
            'original': './test/fixtures/original/react.jsx',
            'transformed': './test/fixtures/transformed/react.js'
        },
        {
            'label': 'TypeScript',
            'original': './test/fixtures/original/typescript.ts',
            'transformed': './test/fixtures/transformed/typescript.js'
        }
    ].forEach(file => {

        it(file.label, done => {

            spire.transformFile(file.original).then(result => {

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
