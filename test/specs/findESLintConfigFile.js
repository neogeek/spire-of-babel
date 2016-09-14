'use strict';

const utils = require('../../lib/utils');

const TEST_ESLINT_PATH_REGEX = /test\/\.eslintrc$/;
const PKG_ESLINT_PATH_REGEX = /\/((?!test).)*\/\.eslintrc/;

describe('findESLintConfigFile', () => {

    it('found config', done => {

        utils.findESLintConfigFile('./test').then(path => {

            if (path.match(TEST_ESLINT_PATH_REGEX)) {

                done();

            }

        });

    });

    it('found package config', done => {

        utils.findESLintConfigFile('./').then(path => {

            if (path.match(PKG_ESLINT_PATH_REGEX)) {

                done();

            }

        });

    });

    it('don\'t find config', done => {

        utils.findESLintConfigFile('./bin').then(path => {

            if (path.match(PKG_ESLINT_PATH_REGEX)) {

                done();

            }

        });

    });

});
