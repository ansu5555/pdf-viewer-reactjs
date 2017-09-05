'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactPdfJs = require('react-pdf-js');

var _reactPdfJs2 = _interopRequireDefault(_reactPdfJs);

var _Navigation = require('./Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mgrpdfStyles = {};
mgrpdfStyles.wrapper = {
  textAlign: 'center'
};

var PDFViewer = function (_React$Component) {
  _inherits(PDFViewer, _React$Component);

  function PDFViewer(props) {
    _classCallCheck(this, PDFViewer);

    var _this = _possibleConstructorReturn(this, (PDFViewer.__proto__ || Object.getPrototypeOf(PDFViewer)).call(this, props));

    _this.state = {
      pages: 0,
      page: props.page || 1
    };

    _this.onDocumentComplete = _this.onDocumentComplete.bind(_this);
    _this.handlePrevClick = _this.handlePrevClick.bind(_this);
    _this.handleNextClick = _this.handleNextClick.bind(_this);
    return _this;
  }

  _createClass(PDFViewer, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref) {
      var page = _ref.page;

      if (page) this.setState({ page: page });
    }
  }, {
    key: 'onDocumentComplete',
    value: function onDocumentComplete(pages) {
      this.setState({
        pages: pages
      });
    }
  }, {
    key: 'handlePrevClick',
    value: function handlePrevClick() {
      if (this.state.page === 1) return;

      this.setState({
        page: this.state.page - 1
      });
    }
  }, {
    key: 'handleNextClick',
    value: function handleNextClick() {
      if (this.state.page === this.state.pages) return;

      this.setState({
        page: this.state.page + 1
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var source = this.props.document;
      var _props = this.props,
          loader = _props.loader,
          scale = _props.scale,
          navigation = _props.navigation,
          css = _props.css;
      var _state = this.state,
          page = _state.page,
          pages = _state.pages;


      var NavigationElement = navigation;

      var pdf = _react2.default.createElement(_reactPdfJs2.default, {
        file: source.file || source.url,
        content: source.base64,
        binaryContent: source.binary,
        documentInitParameters: source.connection,
        loading: loader,
        page: page,
        scale: scale,
        onDocumentComplete: this.onDocumentComplete });

      var nav = null;
      if (pages > 0) {
        nav = !navigation || navigation && (typeof navigation === 'undefined' ? 'undefined' : _typeof(navigation)) === 'object' ? _react2.default.createElement(_Navigation2.default, {
          page: page,
          pages: pages,
          css: navigation ? navigation.css : undefined,
          elements: navigation ? navigation.elements : undefined,
          handleNextClick: this.handleNextClick,
          handlePrevClick: this.handlePrevClick }) : _react2.default.createElement(NavigationElement, {
          page: page,
          pages: pages,
          handleNextClick: this.handleNextClick,
          handlePrevClick: this.handlePrevClick });
      }

      return _react2.default.createElement(
        'div',
        { className: css ? css : 'mgrpdf__wrapper', style: mgrpdfStyles.wrapper },
        pdf,
        nav
      );
    }
  }]);

  return PDFViewer;
}(_react2.default.Component);

PDFViewer.propTypes = {
  document: _propTypes2.default.shape({
    file: _propTypes2.default.any, // File object,
    url: _propTypes2.default.string,
    connection: _propTypes2.default.shape({
      url: _propTypes2.default.string.isRequired // URL to fetch the pdf
    }),
    base64: _propTypes2.default.string, // PDF file encoded in base64
    binary: _propTypes2.default.shape({ // UInt8Array
      data: _propTypes2.default.any
    })
  }).isRequired,

  loader: _propTypes2.default.node,
  page: _propTypes2.default.number,
  scale: _propTypes2.default.number,
  css: _propTypes2.default.string,

  navigation: _propTypes2.default.oneOfType([
  // Can be an object with css classes or react elements to be rendered
  _propTypes2.default.shape({
    css: _propTypes2.default.shape({
      previousPageBtn: _propTypes2.default.string,
      nextPageBtn: _propTypes2.default.string,
      pages: _propTypes2.default.string,
      wrapper: _propTypes2.default.string
    }),
    elements: _propTypes2.default.shape({
      previousPageBtn: _propTypes2.default.any,
      nextPageBtn: _propTypes2.default.any,
      pages: _propTypes2.default.any
    })
  }),
  // Or a full navigation component
  _propTypes2.default.any])
};

PDFViewer.defaultProps = {
  page: 1,
  scale: 1
};

exports.default = PDFViewer;
