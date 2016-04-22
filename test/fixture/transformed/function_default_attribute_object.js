'use strict';

function logMessage() {
    var message = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _ref$type = _ref.type;
    var type = _ref$type === undefined ? 'log' : _ref$type;

    if (type === 'log') {
        console.log(message);
    } else if (type === 'error') {
        console.error(message);
    }
}

logMessage('Hello, friend.');
