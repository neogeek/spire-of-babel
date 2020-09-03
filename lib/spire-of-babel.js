const { join } = require('path');

const { transformFileAsync } = require('@babel/core');
const browserify = require('browserify');

const buildRelativeModulePath = module =>
    join(__dirname, '..', 'node_modules', module);

const plugins = ['@babel/plugin-transform-runtime'].map(
    buildRelativeModulePath
);
const presets = [
    '@babel/preset-env',
    '@babel/preset-flow',
    '@babel/preset-react',
    '@babel/preset-typescript'
].map(buildRelativeModulePath);

const transformFileWithBabel = (
    filename,
    options = {
        sourceMaps: false
    }
) =>
    transformFileAsync(filename, {
        filename,
        overrides: [
            { ...options, sourceMaps: options.sourceMaps ? 'inline' : false }
        ],
        plugins,
        presets,
        sourceMaps: options.sourceMaps ? 'inline' : false
    });

const transformFileWithBrowserify = (
    filename,
    options = {
        sourceMaps: false
    }
) =>
    new Promise((resolve, reject) =>
        browserify(filename, {
            debug: options.sourceMaps,
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        })
            .transform(buildRelativeModulePath('babelify'), {
                plugins,
                presets
            })
            .bundle((err, buff) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ code: buff.toString() });
            })
    );

const transformFile = (
    filename,
    options = {
        bundle: false,
        sourceMaps: false
    }
) => {
    if (options.bundle) {
        return transformFileWithBrowserify(filename, {
            sourceMaps: options.sourceMaps
        });
    }
    return transformFileWithBabel(filename, {
        sourceMaps: options.sourceMaps
    });
};

module.exports = {
    transformFile,
    transformFileWithBabel,
    transformFileWithBrowserify
};
