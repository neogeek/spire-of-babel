"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

{
  var user1 = {
    'isAdmin': false,
    'name': 'Scott'
  };
  var user2 = {
    'isAdmin': false,
    'name': 'Eric'
  };
  var totalReplies = new Map();
  totalReplies.set(user1, 1);
  totalReplies.set(user2, 2);
  console.log(totalReplies.get(user1));
  console.log(totalReplies.get(user2));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = totalReplies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = (0, _slicedToArray2["default"])(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      console.log("".concat(key, " = ").concat(value));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
{
  var _user = {
    'isAdmin': false,
    'name': 'Scott'
  };

  var _totalReplies = new WeakMap();

  _totalReplies.set(_user, 1);

  console.log(_totalReplies.has(_user));
  console.log(_totalReplies["delete"](_user));
  console.log(_totalReplies.has(_user));
}