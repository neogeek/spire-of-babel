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

    it('error while transforming with bundle flag', done => {

        spire.transformFile('./test/fixture/original/error.js', {
            'bundle': true
        }).catch(() => {

            done();

        });

    });

    it('bundle', done => {

        spire.transformFile('./test/fixture/original/bundle.js', {
            'bundle': true
        }).then(result => {

            fs.readFile('./test/fixture/transformed/bundle.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

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

    it('flow', done => {

        spire.transformFile('./test/fixture/original/flow.js').then(result => {

            fs.readFile('./test/fixture/transformed/flow.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('const', done => {

        spire.transformFile('./test/fixture/original/const.js').then(result => {

            fs.readFile('./test/fixture/transformed/const.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('function_default_attribute', done => {

        spire.transformFile('./test/fixture/original/function_default_attribute.js').then(result => {

            fs.readFile('./test/fixture/transformed/function_default_attribute.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('function_default_attribute_object', done => {

        spire.transformFile('./test/fixture/original/function_default_attribute_object.js').then(result => {

            fs.readFile('./test/fixture/transformed/function_default_attribute_object.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('function_destruct_attributes', done => {

        spire.transformFile('./test/fixture/original/function_destruct_attributes.js').then(result => {

            fs.readFile('./test/fixture/transformed/function_destruct_attributes.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('let', done => {

        spire.transformFile('./test/fixture/original/let.js').then(result => {

            fs.readFile('./test/fixture/transformed/let.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('object_destruct', done => {

        spire.transformFile('./test/fixture/original/object_destruct.js').then(result => {

            fs.readFile('./test/fixture/transformed/object_destruct.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('object_initialize', done => {

        spire.transformFile('./test/fixture/original/object_initialize.js').then(result => {

            fs.readFile('./test/fixture/transformed/object_initialize.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('object.assign', done => {

        spire.transformFile('./test/fixture/original/object.assign.js').then(result => {

            fs.readFile('./test/fixture/transformed/object.assign.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('template_string', done => {

        spire.transformFile('./test/fixture/original/template_string.js').then(result => {

            fs.readFile('./test/fixture/transformed/template_string.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

    it('React JSX', done => {

        spire.transformFile('./test/fixture/original/react.jsx').then(result => {

            fs.readFile('./test/fixture/transformed/react.js', 'utf8', (err, fixture) => {

                if (err) {

                    throw err;

                }

                assert.equal(result.code, fixture);

                done();

            });

        });

    });

});
