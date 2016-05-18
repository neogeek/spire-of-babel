# ![Spire of Babel](logo.png)

> A one stop solution for working with ES2015 and React.

[![Build Status](https://travis-ci.org/neogeek/spire-of-babel.svg?branch=master)](https://travis-ci.org/neogeek/spire-of-babel)
[![Dependency Status](https://david-dm.org/neogeek/spire-of-babel.svg)](https://david-dm.org/neogeek/spire-of-babel)
[![bitHound Overall Score](https://www.bithound.io/github/neogeek/spire-of-babel/badges/score.svg)](https://www.bithound.io/github/neogeek/spire-of-babel)
[![NPM Version](http://img.shields.io/npm/v/spire-of-babel.svg?style=flat)](https://www.npmjs.org/package/spire-of-babel)

## Installation

```bash
$ npm install spire-of-babel -g
```

## Usage

```
 Usage: spire-of-babel <path> [options]

 Options:

  -h, --help		Display this help message.
  -v, --version		Display the current installed version.
  -b, --bundle		Use browserify bundler.
  -o, --output		Path to save transformed file to. Defaults to stdout.
  -w, --watch		File path to watch for changes. Value must be in quotes. Example: "./test/**/*.jsx"
  -s, --sourcemap	Generate sourcemap.
```

### CLI

```bash
$ spire-of-babel app.js > app.min.js
```

```bash
$ spire-of-babel app.js --bundle > app.min.js
```

```bash
$ spire-of-babel ./react-project/app.jsx --bundle --watch "./react-project/**/*.jsx" --output ./react-project/app.min.js
```

### API

```javascript
let spire = require('spire-of-babel');

spire.transformFile('react.jsx', {
    bundle: true
}).then(function (result) {

    process.stdout.write(result);

}).catch(function (err) {

    process.stderr.write(`${err}\n`);

});
```

## Documentation



### spire.transformFileWithBabel(file[, options]) 

Transforms a file with babel.




#### Parameters

- **file** `String`   File path.
- **options** `Object`  *Optional* Options object.
- **options.sourcemap** `Boolean`  *Optional* Generate sourcemap.




#### Examples

```javascript
spire.transformFileWithBabel(file).then(function (result) { console.log(result); });
```


#### Returns


- `Object`   Promise




### spire.transformFileWithBrowserify(file[, options]) 

Transforms a file with browserify.




#### Parameters

- **file** `String`   File path.
- **options** `Object`  *Optional* Options object.
- **options.sourcemap** `Boolean`  *Optional* Generate sourcemap.




#### Examples

```javascript
spire.transformFileWithBrowserify(file).then(function (result) { console.log(result); });
```


#### Returns


- `Object`   Promise




### spire.transformFile(file[, options]) 

Transforms a file.




#### Parameters

- **file** `String`   File path.
- **options** `Object`  *Optional* Options object.
- **options.bundle** `Boolean`  *Optional* Use browserify bundler.
- **options.sourcemap** `Boolean`  *Optional* Generate sourcemap.




#### Examples

```javascript
spire.transformFile(file, options).then(function (result) { console.log(result); });
```


#### Returns


- `Object`   Promise




### spire.parseWatchPath(input) 

Parses a path into directory and filename or file regular expression pattern.




#### Parameters

- **input** `String`   Path to parse.




#### Examples

```javascript
console.log(spire.parseWatchPath(input));
```


#### Returns


- `Object`   Object with directory, filename (pattern) and boolean flag.




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
