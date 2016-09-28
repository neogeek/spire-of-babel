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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0ZXN0L2ZpeHR1cmUvb3JpZ2luYWwvYnVuZGxlX2luY2x1ZGUuanMiLCJ0ZXN0L2ZpeHR1cmUvb3JpZ2luYWwvc291cmNlbWFwX2J1bmRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O2tCQ0F3QixVO0FBQVQsU0FBUyxVQUFULEdBQW1DO0FBQUEsUUFBZCxPQUFjLHVFQUFKLEVBQUk7OztBQUU5QyxZQUFRLEdBQVIsQ0FBWSxPQUFaO0FBRUg7Ozs7O0FDSkQ7O0FBRUEsZ0NBQVcsZ0JBQVgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9nTWVzc2FnZSAobWVzc2FnZSA9ICcnKSB7XG5cbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcblxufVxuIiwiaW1wb3J0IHtsb2dNZXNzYWdlfSBmcm9tICcuL2J1bmRsZV9pbmNsdWRlLmpzJztcblxubG9nTWVzc2FnZSgnSGVsbG8sIGZyaWVuZC4nKTtcbiJdfQ==
