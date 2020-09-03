const { transformFileAsync } = require('@babel/core');
const browserify = require('browserify');

const plugins = ['@babel/plugin-transform-runtime'];
const presets = [
    '@babel/preset-env',
    '@babel/preset-flow',
    '@babel/preset-react',
    '@babel/preset-typescript'
];

const transformFileWithBabel = (
    filename,
    options = {
        minified: false,
        sourceMaps: false
    }
) =>
    transformFileAsync(filename, {
        filename,
        minified: false,
        overrides: [options],
        plugins,
        presets,
        sourceMaps: false
    });

const transformFileWithBrowserify = filename =>
    new Promise((resolve, reject) =>
        browserify(filename)
            .transform('babelify', {
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
        return transformFileWithBrowserify(filename);
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
