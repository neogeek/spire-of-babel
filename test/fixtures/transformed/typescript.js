"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Entity = function Entity(x, y) {
    _classCallCheck(this, Entity);

    this.position = {
        x: x,
        y: y
    };
};

exports.default = Entity;
