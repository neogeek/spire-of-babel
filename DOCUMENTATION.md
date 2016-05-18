# Documentation


## spire-of-babel.js


### transformFileWithBabel(file[, options]) 

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



### transformFileWithBrowserify(file[, options]) 

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



### transformFile(file[, options]) 

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




## utils.js


### parseWatchPath(input) 

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
