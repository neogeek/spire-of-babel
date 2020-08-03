"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Widget = /*#__PURE__*/function () {
  function Widget(name, options) {
    (0, _classCallCheck2["default"])(this, Widget);
    this.name = name;
    this.options = options;
    this.className = 'widget';
  }

  (0, _createClass2["default"])(Widget, [{
    key: "render",
    value: function render() {
      return "<div class=\"".concat(this.className, "\">").concat(this.name, "</div>");
    }
  }]);
  return Widget;
}();

var test = new Widget('test');
console.log(test.render());

var AdvertWidget = /*#__PURE__*/function (_Widget) {
  (0, _inherits2["default"])(AdvertWidget, _Widget);

  var _super = _createSuper(AdvertWidget);

  function AdvertWidget() {
    (0, _classCallCheck2["default"])(this, AdvertWidget);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _super.call(this, args);
  }

  (0, _createClass2["default"])(AdvertWidget, [{
    key: "render",
    value: function render() {
      return (0, _get2["default"])((0, _getPrototypeOf2["default"])(AdvertWidget.prototype), "render", this).call(this);
    }
  }]);
  return AdvertWidget;
}(Widget);

var advert = new AdvertWidget('advert');
console.log(advert.render());