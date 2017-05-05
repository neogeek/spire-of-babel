# [spire-of-babel](https://github.com/neogeek/spire-of-babel) *1.2.4*

> A one stop solution for working with ES2015 and React.


### lib/spire-of-babel.js


#### createPresetArray(settings) 

Creates array of presets based on user settings.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| settings | `Object`  | Settings object. | &nbsp; |
| settings.presets | `String`  | Custom presets to load. Comma delimited value. | &nbsp; |
| settings.minify | `Boolean`  | Minify output. | &nbsp; |




##### Examples

```javascript
spire.createPresetArray({'presets': 'es2015', 'minify': true});
```


##### Returns


- `Array`  



#### transformFileWithBabel(file[, options]) 

Transforms a file with babel.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| file | `String`  | File path. | &nbsp; |
| options | `Object`  | Options object. | *Optional* |
| options.sourcemap | `Boolean`  | Generate sourcemap. | *Optional* |




##### Examples

```javascript
spire.transformFileWithBabel(file).then(function (result) { console.log(result); });
```


##### Returns


- `Object`  Promise



#### transformFileWithBrowserify(file[, options]) 

Transforms a file with browserify.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| file | `String`  | File path. | &nbsp; |
| options | `Object`  | Options object. | *Optional* |
| options.output | `Boolean`  | Path to save transformed file to. | *Optional* |
| options.sourcemap | `Boolean`  | Generate sourcemap. | *Optional* |




##### Examples

```javascript
spire.transformFileWithBrowserify(file).then(function (result) { console.log(result); });
```


##### Returns


- `Object`  Promise



#### transformFile(file[, options]) 

Transforms a file.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| file | `String`  | File path. | &nbsp; |
| options | `Object`  | Options object. | *Optional* |
| options.bundle | `Boolean`  | Use browserify bundler. | *Optional* |




##### Examples

```javascript
spire.transformFile(file, options).then(function (result) { console.log(result); });
```


##### Returns


- `Object`  Promise



#### lintFile(file, configFile) 

Lint a file.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| file | `String`  | File path. | &nbsp; |
| configFile | `String`  | Config file. | &nbsp; |




##### Examples

```javascript
spire.lintFile(file, configFile).then(function (results) { console.log(results); });
```


##### Returns


- `Object`  Promise




### lib/utils.js


#### parseWatchPath(input) 

Parses a path into directory and filename or file regular expression pattern.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| input | `String`  | Path to parse. | &nbsp; |




##### Examples

```javascript
console.log(utils.parseWatchPath(input));
```


##### Returns


- `Object`  Object with directory, filename (pattern) and boolean flag.



#### findESLintConfigFile(input) 

Find local .eslintrc file.




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| input | `String`  | Directory or file. | &nbsp; |




##### Examples

```javascript
utils.findESLintConfigFile(input).then((path) => console.log(path));
```


##### Returns


- `Object`  Promise




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
