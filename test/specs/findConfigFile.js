'use strict';

const path = require('path');

const utils = require('../../lib/utils');

const ESLINT_PATH_REGEX = new RegExp('.eslintrc$');
const ESLINTIGNORE_PATH_REGEX = new RegExp('.eslintignore$');

describe('findConfigFile', () => {

    it('found local config', done => {

        utils.findConfigFile('./test').then(filepath => {

            if (filepath.match(ESLINT_PATH_REGEX) && filepath.match(path.join('.', 'test'))) {

                done();

            } else {

                done(new Error(`${filepath} did not match the test pattern`));

            }

        });

    });

    it('found package config', done => {

        utils.findConfigFile('./').then(filepath => {

            if (filepath.match(ESLINT_PATH_REGEX)) {

                done();

            } else {

                done(new Error(`${filepath} did not match the test pattern`));

            }

        });

    });

    it('found custom config', done => {

        utils.findConfigFile('./', '.eslintignore').then(filepath => {

            if (filepath.match(ESLINTIGNORE_PATH_REGEX)) {

                done();

            } else {

                done(new Error(`${filepath} did not match the test pattern`));

            }

        });

    });

    it('don\'t find config', done => {

        utils.findConfigFile('./bin').then(filepath => {

            if (filepath.match(ESLINT_PATH_REGEX) && filepath.match(path.join('.', 'bin'))) {

                done(new Error(`${filepath} incorrectly matched the test pattern`));

            } else {

                done();

            }

        });

    });

});
