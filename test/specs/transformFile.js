'use strict';

const fs = require('fs');
const assert = require('assert');

const spire = require('../../lib/spire-of-babel');

describe('transformFile with babel', () => {

    it('error while transforming', done => {

        spire.transformFile('./test/fixture/original/error.js').catch(() => {

            done();

        });

    });

    [
        {
            'label': 'let',
            'original': './test/fixture/original/let.js',
            'transformed': './test/fixture/transformed/let.js'
        },
        {
            'label': 'const',
            'original': './test/fixture/original/const.js',
            'transformed': './test/fixture/transformed/const.js'
        },
        {
            'label': 'Functions',
            'original': './test/fixture/original/function.js',
            'transformed': './test/fixture/transformed/function.js'
        },
        {
            'label': 'Objects',
            'original': './test/fixture/original/object.js',
            'transformed': './test/fixture/transformed/object.js'
        },
        {
            'label': 'Template String',
            'original': './test/fixture/original/template_string.js',
            'transformed': './test/fixture/transformed/template_string.js'
        },
        {
            'label': 'Flow',
            'original': './test/fixture/original/flow.js',
            'transformed': './test/fixture/transformed/flow.js'
        },
        {
            'label': 'React JSX',
            'original': './test/fixture/original/react.jsx',
            'transformed': './test/fixture/transformed/react.js'
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
