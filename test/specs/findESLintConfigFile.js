'use strict';

const path = require('path');

const utils = require('../../lib/utils');

const ESLINT_PATH_REGEX = new RegExp('.eslintrc$');

describe('findESLintConfigFile', () => {

    it('found config', done => {

        utils.findESLintConfigFile('./test').then(filepath => {

            if (filepath.match(ESLINT_PATH_REGEX) && filepath.match(path.join('.', 'test'))) {

                done();

            } else {

                done(new Error(`${filepath} did not match the test pattern`));

            }

        });

    });

    it('found package config', done => {

        utils.findESLintConfigFile('./').then(filepath => {

            if (filepath.match(ESLINT_PATH_REGEX)) {

                done();

            } else {

                done(new Error(`${filepath} did not match the test pattern`));

            }

        });

    });

    it('don\'t find config', done => {

        utils.findESLintConfigFile('./bin').then(filepath => {

            if (filepath.match(ESLINT_PATH_REGEX) && filepath.match(path.join('.', 'bin'))) {

                done(new Error(`${filepath} did not match the test pattern`));

            } else {

                done();

            }

        });

    });

});
