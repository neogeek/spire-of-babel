'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Text = function () {
    function Text() {
        _classCallCheck(this, Text);
    }

    _createClass(Text, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'span',
                { className: 'text' },
                this.props.content
            );
        }
    }]);

    return Text;
}();

Text.displayName = 'Text';
Text.propTypes = {
    'content': 'React.PropTypes.string.isRequired'
};
exports.default = Text;
