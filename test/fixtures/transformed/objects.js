"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

{
  var firstName = 'Scott';
  var lastName = 'Doxey';
  var user = {
    firstName: firstName,
    lastName: lastName
  };
  console.log(user);
}
{
  var _user = {
    'firstName': 'Scott',
    'lastName': 'Doxey'
  };
  var _firstName = _user.firstName,
      _lastName = _user.lastName;
  console.log(_firstName);
  console.log(_lastName);
}

var renderPolygon = function renderPolygon(points) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaults = {
    'fillStyle': '#eee',
    'lineWidth': 1,
    'strokeStyle': '#000'
  };

  var settings = _objectSpread({}, defaults, {}, options);

  console.log(defaults);
  console.log(options);
  console.log(settings);
};

renderPolygon([[0, 0], [100, 100]], {
  'fillStyle': '#000',
  'lineWidth': 2,
  'strokeStyle': '#aaa'
});