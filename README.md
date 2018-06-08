# ![Spire of Babel](logo.png)

> A one stop solution for working with ES2015 and React.

[![Build Status](https://travis-ci.org/neogeek/spire-of-babel.svg?branch=master)](https://travis-ci.org/neogeek/spire-of-babel)
[![AppVeyor branch](https://img.shields.io/appveyor/ci/neogeek/spire-of-babel/master.svg)](https://ci.appveyor.com/project/neogeek/spire-of-babel)
[![codecov](https://img.shields.io/codecov/c/github/neogeek/spire-of-babel/master.svg)](https://codecov.io/gh/neogeek/spire-of-babel)
[![Dependency Status](https://david-dm.org/neogeek/spire-of-babel.svg)](https://david-dm.org/neogeek/spire-of-babel)
[![Known Vulnerabilities](https://snyk.io/test/npm/spire-of-babel/badge.svg)](https://snyk.io/test/npm/spire-of-babel)
[![NPM Version](http://img.shields.io/npm/v/spire-of-babel.svg?style=flat)](https://www.npmjs.org/package/spire-of-babel)
[![Greenkeeper badge](https://badges.greenkeeper.io/neogeek/spire-of-babel.svg)](https://greenkeeper.io/)
[![Latest Documentation](https://doxdox.org/images/badge-flat.svg)](https://doxdox.org/neogeek/spire-of-babel)

Spire of Babel is a zero-config tool takes the guesswork out of setting up a project written in ES2015 and React. In addition to converting ES2015 with [Babel](https://babeljs.io/), Spire of Babel also comes with a [bundler](https://github.com/babel/babelify) for using both `require('')` and `import` styled module loaders, minification, linting with [ESLint](http://eslint.org/), and auto-generated sourcemaps.

## Installation

```bash
$ npm install spire-of-babel -g
```

## Usage

```
Usage: spire-of-babel <path> [options]

Options:

 -h, --help         Display this help message.
 -v, --version      Display the current installed version.
 -b, --bundle       Use browserify bundler.
 -d, --dir          Directory to run linter on.
 -l, --lint         Lint files before transpiling.
 -m, --minify       Minify output.
 -o, --output       Path to save transformed file to. Defaults to stdout.
 -p, --presets      Load custom presets (es2015, es2016, es2017, env). Defaults to react and es2015. Comma delimited value.
 -s, --sourcemap    Generate sourcemap.
 -w, --watch        File path to watch for changes. Example: ./test/**/*.jsx
```

### CLI

#### Transpile ES6 to ES5

```bash
$ spire-of-babel es6.js > es5.js
```

#### Bundle and Minify

```bash
$ spire-of-babel ./src/js/app.js --bundle --minify > ./static/js/bundle.min.js
```

#### Watch for Changes

```bash
$ spire-of-babel ./src/js/app.jsx --bundle --minify --watch './src/js/**/*.jsx' --output ./static/js/bundle.min.js
```

#### Transpile With Custom Presets

```bash
$ spire-of-babel ./src/js/app.jsx --bundle --presets env,stage-2 --output ./static/js/bundle.min.js
```

#### Build for Production Use

**Notice:** This only works with the bundle flag.

```bash
$ NODE_ENV=production spire-of-babel ./src/js/app.jsx --bundle --output ./static/js/bundle.min.js
```

To reduce the size of the bundle and take advantage of DCE (dead code elimination), use the `--minify` flag.

```bash
$ NODE_ENV=production spire-of-babel ./src/js/app.jsx --bundle --minify --output ./static/js/bundle.min.js
```

### NPM Scripts

This is an example build process using [NPM scripts](https://docs.npmjs.com/misc/scripts). Running `npm run build` will transpile the `src/js/app.jsx` file and output the contents to `static/js/bundle.min.js`.

```json
{
  "dependencies": {
    "babel-preset-env": "1.7.0",
    "babel-preset-stage-2": "6.24.1",
    "prop-types": "15.6.1",
    "react": "16.4.0",
    "react-dom": "16.4.0"
  },
  "devDependencies": {
    "spire-of-babel": "1.4.0"
  },
  "scripts": {
    "build": "spire-of-babel ./src/js/app.jsx --bundle --minify --presets env,stage-2 --output ./static/js/bundle.min.js"
  }
}
```

### Makefile

This is an example build process using a `Makefile` and the NPM package [onchange](https://www.npmjs.com/package/onchange). When a change is detected, `make build` is run automatically. Upon completion, the computer will beep to signal that it is done with the current build (note will only work on a Mac).

```bash
BIN=node_modules/.bin

build:
	$(BIN)/spire-of-babel ./src/js/app.jsx --bundle --minify --output ./static/js/bundle.min.js && tput bel

watch:
	make build
	$(BIN)/onchange './src/js/**/*.jsx' -- make build
```

### [Babel Plugins](https://babeljs.io/docs/plugins/) via `.babelrc`

Spire of Babel works in the same way that Babel would in that it will use a `.babelrc` file located within your project for additional configuration.

To add plugins not [already included](package.json) in Spire of Babel, add them to a `.babelrc` file located in the root of your project.

**.babelrc**

```json
{
  "plugins": ["transform-async-generator-functions"]
}
```

See <https://babeljs.io/docs/plugins/transform-async-generator-functions/> for more information about the above example.

### API

```javascript
const spire = require('spire-of-babel');

spire.transformFile('react.jsx', {
    'bundle': true,
    'minify': true,
    'presets': 'env,stage-2',
    'sourcemap': true
}).then(function (result) {

    process.stdout.write(result.code);

}).catch(function (err) {

    process.stderr.write(`${err}\n`);

});
```

## Documentation

View full documentation [here](https://doxdox.org/neogeek/spire-of-babel).
