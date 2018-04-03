'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CollapsibleString = function (_React$PureComponent) {
  (0, _inherits3['default'])(CollapsibleString, _React$PureComponent);

  function CollapsibleString(props) {
    (0, _classCallCheck3['default'])(this, CollapsibleString);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$PureComponent.call(this, props));

    _this.state = {
      collapsed: true
    };

    _this.toggleCollapsed = _this.toggleCollapsed.bind(_this);
    return _this;
  }

  CollapsibleString.prototype.toggleCollapsed = function toggleCollapsed() {
    var _this2 = this;

    this.setState(function (state) {
      return { collapsed: !_this2.state.collapsed };
    });
  };

  CollapsibleString.prototype.render = function render() {
    if (this.props.value.length < this.props.characterCutOff) {
      return _react2['default'].createElement(
        'span',
        null,
        this.props.value
      );
    } else if (!this.state.collapsed) {
      return _react2['default'].createElement(
        'span',
        { style: { cursor: 'pointer' }, onClick: this.toggleCollapsed },
        this.props.collapsibleStringIcons.collapse,
        ' ',
        this.props.value
      );
    } else {
      return _react2['default'].createElement(
        'span',
        { style: { cursor: 'pointer' }, onClick: this.toggleCollapsed },
        this.props.collapsibleStringIcons.expand
      );
    }
  };

  return CollapsibleString;
}(_react2['default'].PureComponent);

CollapsibleString.propTypes = {
  value: _propTypes2['default'].string.isRequired,
  characterCutOff: _propTypes2['default'].number,
  collapsibleStringIcons: _propTypes2['default'].shape({
    expand: _propTypes2['default'].any,
    collapse: _propTypes2['default'].any
  }).isRequired
};
CollapsibleString.defaultProps = {
  characterCutOff: 50
};
exports['default'] = CollapsibleString;