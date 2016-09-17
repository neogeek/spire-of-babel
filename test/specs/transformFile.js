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
            'label': 'Function Default Attribute',
            'original': './test/fixture/original/function_default_attribute.js',
            'transformed': './test/fixture/transformed/function_default_attribute.js'
        },
        {
            'label': 'Function Default Attribute (Object)',
            'original': './test/fixture/original/function_default_attribute_object.js',
            'transformed': './test/fixture/transformed/function_default_attribute_object.js'
        },
        {
            'label': 'Function Destruct Attributes',
            'original': './test/fixture/original/function_destruct_attributes.js',
            'transformed': './test/fixture/transformed/function_destruct_attributes.js'
        },
        {
            'label': 'Object Destruct',
            'original': './test/fixture/original/object_destruct.js',
            'transformed': './test/fixture/transformed/object_destruct.js'
        },
        {
            'label': 'Object Initialize',
            'original': './test/fixture/original/object_initialize.js',
            'transformed': './test/fixture/transformed/object_initialize.js'
        },
        {
            'label': 'Object.assign',
            'original': './test/fixture/original/object.assign.js',
            'transformed': './test/fixture/transformed/object.assign.js'
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
