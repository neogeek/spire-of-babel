"use strict";

var logMessage = function logMessage() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'log' : _ref$type,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? true : _ref$display;

  if (display) {
    if (type === 'log') {
      console.log(message);
    } else if (type === 'error') {
      console.error(message);
    }
  }
};

logMessage('Hello, friend.');

var displayQuotes = function displayQuotes() {
  var _console;

  (_console = console).log.apply(_console, arguments);
};

displayQuotes('Hello, friend.', 'Hello, friend?', "That's lame.", "Maybe I should give you a name, but that's a slippery slope.", "You're only in my head.", 'We have to remember that.', 'Shit.');