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
        minified: false,
        sourceMaps: false
    }
) =>
    transformFileAsync(filename, {
        filename,
        minified: options.minified,
        overrides: [options],
        plugins,
        presets,
        sourceMaps: options.sourceMaps
    });

const transformFileWithBrowserify = (
    filename,
    options = {
        minified: false,
        sourceMaps: false
    }
) =>
    new Promise((resolve, reject) =>
        browserify(filename, {
            debug: options.sourceMaps,
            minified: options.minified,
            extensions: ['.js', '.es', '.es6', '.jsx', '.ts', '.tsx']
        })
            .transform(join(__dirname, '..', 'node_modules', 'babelify'), {
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
        minified: false,
        sourceMaps: false
    }
) => {
    if (options.bundle) {
        return transformFileWithBrowserify(filename, options);
    }
    return transformFileWithBabel(filename, {
        minified: options.minified,
        sourceMaps: options.sourceMaps
    });
};

module.exports = {
    transformFile,
    transformFileWithBabel,
    transformFileWithBrowserify
};
