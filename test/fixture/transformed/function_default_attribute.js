'use strict';

function logMessage() {
    var message = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    console.log(message);
}

logMessage('Hello, friend.');