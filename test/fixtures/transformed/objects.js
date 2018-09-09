"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

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
  var settings = (0, _objectSpread2.default)({}, defaults, options);
  console.log(defaults);
  console.log(options);
  console.log(settings);
};

renderPolygon([[0, 0], [100, 100]], {
  'fillStyle': '#000',
  'lineWidth': 2,
  'strokeStyle': '#aaa'
});