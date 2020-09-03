# ![Spire of Babel](logo.png)

> A one stop solution for working with ES6, React and TypeScript.

[![Build Status](https://travis-ci.org/neogeek/spire-of-babel.svg?branch=master)](https://travis-ci.org/neogeek/spire-of-babel)
[![AppVeyor branch](https://img.shields.io/appveyor/ci/neogeek/spire-of-babel/master.svg)](https://ci.appveyor.com/project/neogeek/spire-of-babel)
[![Known Vulnerabilities](https://snyk.io/test/npm/spire-of-babel/badge.svg)](https://snyk.io/test/npm/spire-of-babel)
[![NPM Version](http://img.shields.io/npm/v/spire-of-babel.svg?style=flat)](https://www.npmjs.org/package/spire-of-babel)
[![Latest Documentation](https://doxdox.org/images/badge-flat.svg)](https://doxdox.org/neogeek/spire-of-babel)

Spire of Babel is a zero-config tool takes the guesswork out of setting up a project written in ES6, React and TypeScript. In addition to converting ES6 with [Babel](https://babeljs.io/), Spire of Babel also comes with a [bundler](https://github.com/babel/babelify) for using both `require('')` and `import` styled module loaders, and auto-generated sourcemaps.

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
 -m, --minify       Minify output (doesn't work with --bundle flag).
 -s, --sourcemap    Generate sourcemap.
```

### CLI

#### Transpile ES6 to ES5

```bash
$ spire-of-babel es6.js > es5.js
```

#### Bundle

```bash
$ spire-of-babel ./src/js/app.js --bundle > ./static/js/bundle.min.js
```

### NPM Scripts

This is an example build process using [NPM scripts](https://docs.npmjs.com/misc/scripts). Running `npm run build` will transpile the `src/js/app.jsx` file and output the contents to `static/js/bundle.min.js`.

```json
{
    "dependencies": {
        "babel-preset-env": "1.7.0",
        "babel-preset-stage-2": "6.24.1",
        "prop-types": "15.7.2",
        "react": "16.13.1",
        "react-dom": "16.13.1"
    },
    "devDependencies": {
        "spire-of-babel": "2.0.0"
    },
    "scripts": {
        "build": "spire-of-babel ./src/js/app.jsx --bundle > ./static/js/bundle.js"
    }
}
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

transform('react.jsx', {
    bundle: true
}).then(({ code }) => process.stdout.write(code));
```

## Documentation

View full documentation [here](https://doxdox.org/neogeek/spire-of-babel).
