'use strict';

const path = require('path');

const utils = require('../../lib/utils');

const TEST_ESLINT_PATH_REGEX = new RegExp(path.join('test', '.eslintrc'));

describe('findESLintConfigFile', () => {

    it('found config', done => {

        utils.findESLintConfigFile('./test').then(filepath => {

            if (filepath.match(TEST_ESLINT_PATH_REGEX)) {

                done();

            } else {

                done(new Error(`${filepath} did not match the test pattern`));

            }

        });

    });

    it('found package config', done => {

        utils.findESLintConfigFile('./').then(filepath => {

            if (filepath.match(TEST_ESLINT_PATH_REGEX)) {

                done(new Error(`${filepath} did not match the test pattern`));

            } else {

                done();

            }

        });

    });

    it('don\'t find config', done => {

        utils.findESLintConfigFile('./bin').then(filepath => {

            if (filepath.match(TEST_ESLINT_PATH_REGEX)) {

                done(new Error(`${filepath} did not match the test pattern`));

            } else {

                done();

            }

        });

    });

});
