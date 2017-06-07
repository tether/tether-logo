'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is a simple description.
 *
 * @param {Object} props (title, className, message)
 * @api public
 */

exports.default = function (props) {
  return _react2.default.createElement(
    'h1',
    { className: props.className || 'tether-logo' },
    _react2.default.createElement(
      'a',
      { href: '/' },
      props.children || _react2.default.createElement(Logo, null),
      _react2.default.createElement(
        'span',
        { 'data-message': props.message },
        props.title || 'Tether'
      )
    )
  );
};

/**
 * Tether logo in SVG.
 *
 * @api private
 */

/**
 * Dependencies.
 */

function Logo() {
  return _react2.default.createElement(
    'svg',
    { width: '36px', height: '36px', viewBox: '0 0 134 134' },
    _react2.default.createElement(
      'title',
      null,
      'Tether'
    ),
    _react2.default.createElement(
      'defs',
      null,
      _react2.default.createElement('polygon', { id: 'path-1', points: '0.393496659 0 21.930245 0 21.930245 21.5366592 0.393496659 21.5366592 0.393496659 0' }),
      _react2.default.createElement('polygon', { id: 'path-3', points: '0 21.8785746 0 0.341380846 21.5365702 0.341380846 21.5365702 21.8785746 1.14236032e-15 21.8785746' }),
      _react2.default.createElement('polygon', { id: 'path-5', points: '21.8780401 21.8262806 0.341291759 21.8262806 0.341291759 0.289175947 21.8780401 0.289175947' })
    ),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', 'fill-rule': 'evenodd' },
      _react2.default.createElement(
        'g',
        { transform: 'translate(-192.000000, -954.000000)' },
        _react2.default.createElement(
          'g',
          { transform: 'translate(192.000000, 954.000000)' },
          _react2.default.createElement('path', { d: 'M59.5367483,10.7683742 C59.5367483,16.7158129 54.7153675,21.5367483 48.7679287,21.5367483 C42.8213808,21.5367483 38,16.7158129 38,10.7683742 C38,4.82093541 42.8213808,0 48.7679287,0 C54.7153675,0 59.5367483,4.82093541 59.5367483,10.7683742', id: 'Fill-13', fill: '#8BC34A' }),
          _react2.default.createElement('path', { d: 'M77.5367483,28.7683742 C77.5367483,34.7158129 72.7158129,39.5367483 66.7683742,39.5367483 C60.8213808,39.5367483 56,34.7158129 56,28.7683742 C56,22.8209354 60.8213808,18 66.7683742,18 C72.7158129,18 77.5367483,22.8209354 77.5367483,28.7683742', id: 'Fill-16', fill: '#8BC34A' }),
          _react2.default.createElement('path', { d: 'M96.5367483,47.7688196 C96.5367483,53.7162584 91.7158129,58.5371938 85.7683742,58.5371938 C79.8218263,58.5371938 75,53.7162584 75,47.7688196 C75,41.8213808 79.8218263,37 85.7683742,37 C91.7158129,37 96.5367483,41.8213808 96.5367483,47.7688196', id: 'Fill-18', fill: '#8BC34A' }),
          _react2.default.createElement('path', { d: 'M59.5367483,47.7688196 C59.5367483,53.7162584 54.7153675,58.5371938 48.7679287,58.5371938 C42.8213808,58.5371938 38,53.7162584 38,47.7688196 C38,41.8213808 42.8213808,37 48.7679287,37 C54.7153675,37 59.5367483,41.8213808 59.5367483,47.7688196', id: 'Fill-20', fill: '#8BC34A' }),
          _react2.default.createElement('path', { d: 'M40.5367483,66.7683742 C40.5367483,72.7158129 35.7158129,77.5367483 29.7683742,77.5367483 C23.8218263,77.5367483 19,72.7158129 19,66.7683742 C19,60.8209354 23.8218263,56 29.7683742,56 C35.7158129,56 40.5367483,60.8209354 40.5367483,66.7683742', id: 'Fill-22', fill: '#8BC34A' }),
          _react2.default.createElement('path', { d: 'M21.5367483,84.7688196 C21.5367483,90.7158129 16.7158129,95.5371938 10.7683742,95.5371938 C4.82138085,95.5371938 0,90.7158129 0,84.7688196 C0,78.8213808 4.82138085,74 10.7683742,74 C16.7158129,74 21.5367483,78.8213808 21.5367483,84.7688196', id: 'Fill-24', fill: '#8BC34A' }),
          _react2.default.createElement('path', { d: 'M59.5367483,84.7688196 C59.5367483,90.7158129 54.7153675,95.5371938 48.7679287,95.5371938 C42.8213808,95.5371938 38,90.7158129 38,84.7688196 C38,78.8213808 42.8213808,74 48.7679287,74 C54.7153675,74 59.5367483,78.8213808 59.5367483,84.7688196', id: 'Fill-27', fill: '#03A9F4' }),
          _react2.default.createElement('path', { d: 'M77.5367483,103.76882 C77.5367483,109.715813 72.7158129,114.537194 66.7683742,114.537194 C60.8213808,114.537194 56,109.715813 56,103.76882 C56,97.8213808 60.8213808,93 66.7683742,93 C72.7158129,93 77.5367483,97.8213808 77.5367483,103.76882', id: 'Fill-29', fill: '#03A9F4' }),
          _react2.default.createElement('path', { d: 'M96.5367483,122.76882 C96.5367483,128.716258 91.7158129,133.537194 85.7683742,133.537194 C79.8218263,133.537194 75,128.716258 75,122.76882 C75,116.821381 79.8218263,112 85.7683742,112 C91.7158129,112 96.5367483,116.821381 96.5367483,122.76882', id: 'Fill-31', fill: '#03A9F4' }),
          _react2.default.createElement('path', { d: 'M96.5367483,84.7688196 C96.5367483,90.7158129 91.7158129,95.5371938 85.7683742,95.5371938 C79.8218263,95.5371938 75,90.7158129 75,84.7688196 C75,78.8213808 79.8218263,74 85.7683742,74 C91.7158129,74 96.5367483,78.8213808 96.5367483,84.7688196', id: 'Fill-34', fill: '#03A9F4' }),
          _react2.default.createElement('path', { d: 'M115.536748,66.7683742 C115.536748,72.7158129 110.715367,77.5367483 104.767929,77.5367483 C98.8213808,77.5367483 94,72.7158129 94,66.7683742 C94,60.8209354 98.8213808,56 104.767929,56 C110.715367,56 115.536748,60.8209354 115.536748,66.7683742', id: 'Fill-36', fill: '#03A9F4' }),
          _react2.default.createElement('path', { d: 'M133.536748,47.7688196 C133.536748,53.7162584 128.715813,58.5371938 122.768374,58.5371938 C116.821826,58.5371938 112,53.7162584 112,47.7688196 C112,41.8213808 116.821826,37 122.768374,37 C128.715813,37 133.536748,41.8213808 133.536748,47.7688196', id: 'Fill-38', fill: '#03A9F4' })
        )
      )
    )
  );
}