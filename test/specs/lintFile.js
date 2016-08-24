'use strict';

const spire = require('../../lib/spire-of-babel');

describe('lint file', () => {

    it('found lint errors', (done) => {

        spire.lintFile('./test/fixture/original/lint.js').catch((err) => {

            console.log(err);

            done();

        });

    });

    it('don\'t find lint errors', (done) => {

        spire.lintFile('./test/fixture/original/const.js').then(() => {

            done();

        });

    });

});
