'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Widget = function () {
    function Widget(name, options) {
        _classCallCheck(this, Widget);

        this.name = name;
        this.options = options;

        this.className = 'widget';
    }

    _createClass(Widget, [{
        key: 'render',
        value: function render() {

            return '<div class="' + this.className + '">' + this.name + '</div>';
        }
    }]);

    return Widget;
}();

var test = new Widget('test');

console.log(test.render());

var AdvertWidget = function (_Widget) {
    _inherits(AdvertWidget, _Widget);

    function AdvertWidget() {
        _classCallCheck(this, AdvertWidget);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (AdvertWidget.__proto__ || Object.getPrototypeOf(AdvertWidget)).call(this, args));
    }

    _createClass(AdvertWidget, [{
        key: 'render',
        value: function render() {

            return _get(AdvertWidget.prototype.__proto__ || Object.getPrototypeOf(AdvertWidget.prototype), 'render', this).call(this);
        }
    }]);

    return AdvertWidget;
}(Widget);

var advert = new AdvertWidget('advert');

console.log(advert.render());
