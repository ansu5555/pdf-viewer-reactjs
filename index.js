'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPdfJs = require('react-pdf-js');

var _reactPdfJs2 = _interopRequireDefault(_reactPdfJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PDFViewer = function (_React$Component) {
  _inherits(PDFViewer, _React$Component);

  function PDFViewer(props) {
    _classCallCheck(this, PDFViewer);

    return _possibleConstructorReturn(this, (PDFViewer.__proto__ || Object.getPrototypeOf(PDFViewer)).call(this, props));
  }

  _createClass(PDFViewer, [{
    key: 'render',
    value: function render() {
      var source = this.props.document;
      var loader = this.props.loader;


      return _react2.default.createElement(_reactPdfJs2.default, {
        file: source.file || source.url,
        content: source.base64,
        binaryContent: source.binary,
        documentInitParameters: source.connection,
        loading: loader });
    }
  }]);

  return PDFViewer;
}(_react2.default.Component);

PDFViewer.propTypes = {
  document: _react.PropTypes.shape({
    file: _react.PropTypes.any, // File object,
    url: _react.PropTypes.string,
    connection: _react.PropTypes.shape({
      url: _react.PropTypes.string.isRequired }),
    base64: _react.PropTypes.string, // PDF file encoded in base64
    binary: _react.PropTypes.shape({ // UInt8Array
      data: _react.PropTypes.any
    })
  }),

  loader: _react.PropTypes.node,
  page: _react.PropTypes.number,
  scale: _react.PropTypes.number
};

exports.default = PDFViewer;
