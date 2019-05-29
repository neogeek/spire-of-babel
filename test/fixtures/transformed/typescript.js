"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Entity = function Entity(x, y) {
  (0, _classCallCheck2["default"])(this, Entity);
  this.position = {
    x: x,
    y: y
  };
};

exports["default"] = Entity;