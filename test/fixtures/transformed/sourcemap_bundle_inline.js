(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = logMessage;
function logMessage() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


    console.log(message);
}

},{}],2:[function(require,module,exports){
'use strict';

var _bundle_include = require('./bundle_include.js');

(0, _bundle_include.logMessage)('Hello, friend.');

},{"./bundle_include.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0ZXN0L2ZpeHR1cmVzL29yaWdpbmFsL2J1bmRsZV9pbmNsdWRlLmpzIiwidGVzdC9maXh0dXJlcy9vcmlnaW5hbC9zb3VyY2VtYXBfYnVuZGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQXdCLFU7QUFBVCxTQUFTLFVBQVQsR0FBbUM7QUFBQSxRQUFkLE9BQWMsdUVBQUosRUFBSTs7O0FBRTlDLFlBQVEsR0FBUixDQUFZLE9BQVo7QUFFSDs7Ozs7QUNKRDs7QUFFQSxnQ0FBVyxnQkFBWCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dNZXNzYWdlIChtZXNzYWdlID0gJycpIHtcblxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuXG59XG4iLCJpbXBvcnQge2xvZ01lc3NhZ2V9IGZyb20gJy4vYnVuZGxlX2luY2x1ZGUuanMnO1xuXG5sb2dNZXNzYWdlKCdIZWxsbywgZnJpZW5kLicpO1xuIl19
