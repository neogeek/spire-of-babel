'use strict';

const spire = require('../../lib/spire-of-babel');

describe('lint file', () => {

    it('find lint errors', (done) => {

        spire.lintFile('./test/fixture/original/lint.js').catch(() => {

            done();

        });

    });

    it('don\'t find lint errors', (done) => {

        spire.lintFile('./test/fixture/original/const.js').then(() => {

            done();

        });

    });

});
