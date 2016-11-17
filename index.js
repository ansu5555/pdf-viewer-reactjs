'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPdfJs = require('react-pdf-js');

var _reactPdfJs2 = _interopRequireDefault(_reactPdfJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {};
styles.navigation = {
  display: 'inline-block'
};

styles.controls = _extends({}, styles.navigation, {
  textAlign: 'center'
});

styles.wrapper = _extends({}, styles.controls, {
  width: '100%',
  heigth: 24,
  backgroundColor: '#323232',
  color: '#fff'
});

styles.previous = _extends({}, styles.controls, {
  marginRight: 12,
  cursor: 'pointer'
});

styles.next = _extends({}, styles.controls, {
  marginLeft: 12,
  cursor: 'pointer'
});

styles.pages = _extends({}, styles.controls);

var PreviousPageButton = function PreviousPageButton(props) {
  var css = props.css,
      page = props.page,
      handlePrevClick = props.handlePrevClick;


  var prevClass = '\n    ' + (css ? css : "mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--previous") + '\n    ' + (page === 1 ? ' mgrpdf-navigation__controls--disabled' : '') + '\n  ';

  return _react2.default.createElement(
    'div',
    { className: prevClass, style: css ? {} : styles.previous, onClick: handlePrevClick },
    _react2.default.createElement(
      'a',
      null,
      "<"
    )
  );
};
PreviousPageButton.propTypes = {
  css: _react.PropTypes.string,
  page: _react.PropTypes.number.isRequired,
  handlePrevClick: _react.PropTypes.func.isRequired
};

var NextPageButton = function NextPageButton(props) {
  var css = props.css,
      page = props.page,
      pages = props.pages,
      handleNextClick = props.handleNextClick;


  var nextClass = '\n    ' + (css ? css : "mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--next") + '\n    ' + (page === pages ? ' mgrpdf-navigation__controls--disabled' : '') + '\n  ';

  return _react2.default.createElement(
    'div',
    { className: nextClass, style: css ? {} : styles.next, onClick: handleNextClick },
    _react2.default.createElement(
      'a',
      null,
      ">"
    )
  );
};
NextPageButton.propTypes = {
  css: _react.PropTypes.string,
  page: _react.PropTypes.number.isRequired,
  pages: _react.PropTypes.number.isRequired,
  handleNextClick: _react.PropTypes.func.isRequired
};

var PagesIndicator = function PagesIndicator(props) {
  var css = props.css,
      page = props.page,
      pages = props.pages;


  var pagesClass = css ? css : "mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--pages";

  return _react2.default.createElement(
    'div',
    { className: pagesClass, style: css ? {} : styles.pages },
    page,
    '/',
    pages
  );
};
PagesIndicator.propTypes = {
  css: _react.PropTypes.string,
  page: _react.PropTypes.number.isRequired,
  pages: _react.PropTypes.number.isRequired
};

var Navigation = function Navigation(props) {
  var page = props.page,
      pages = props.pages,
      css = props.css,
      elements = props.elements;
  var handlePrevClick = props.handlePrevClick,
      handleNextClick = props.handleNextClick;


  var prevEl = void 0,
      nextEl = void 0,
      pagesEl = void 0;
  if (elements.previousPageBtn) {
    prevEl = _react2.default.createElement(elements.previousPageBtn, { page: page, pages: pages, handlePrevClick: handlePrevClick });
  } else {
    prevEl = _react2.default.createElement(PreviousPageButton, { css: css.previousPageBtn, page: page, pages: pages, handlePrevClick: handlePrevClick });
  }

  if (elements.nextPageBtn) {
    nextEl = _react2.default.createElement(elements.nextPageBtn, { page: page, pages: pages, handleNextClick: handleNextClick });
  } else {
    nextEl = _react2.default.createElement(NextPageButton, { css: css.nextPageBtn, page: page, pages: pages, handleNextClick: handleNextClick });
  }

  if (elements.pages) {
    pagesEl = _react2.default.createElement(elements.pages, { page: page, pages: pages });
  } else {
    pagesEl = _react2.default.createElement(PagesIndicator, { css: css.pages, page: page, pages: pages });
  }

  var wrapperClass = css.wrapper ? css.wrapper : "mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--wrapper";

  return _react2.default.createElement(
    'div',
    { className: wrapperClass, style: css.wrapper ? {} : styles.wrapper },
    prevEl,
    pagesEl,
    nextEl
  );
};

Navigation.propTypes = {
  page: _react.PropTypes.number.isRequired,
  pages: _react.PropTypes.number.isRequired,

  css: _react.PropTypes.shape({
    previousPageBtn: _react.PropTypes.string,
    nextPageBtn: _react.PropTypes.string,
    pages: _react.PropTypes.string,
    wrapper: _react.PropTypes.string
  }),
  elements: _react.PropTypes.shape({
    previousPageBtn: _react.PropTypes.any,
    nextPageBtn: _react.PropTypes.any,
    pages: _react.PropTypes.any
  }),

  handlePrevClick: _react.PropTypes.func.isRequired,
  handleNextClick: _react.PropTypes.func.isRequired
};
Navigation.defaultProps = {
  css: {},
  elements: {}
};

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
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.page) {
        this.setState({
          page: nextProps.page
        });
      }
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
        console.log(navigation.propTypes);
        nav = !navigation || navigation && (typeof navigation === 'undefined' ? 'undefined' : _typeof(navigation)) === 'object' ? _react2.default.createElement(Navigation, {
          page: page,
          pages: pages,
          css: navigation ? navigation.css : undefined,
          elements: navigation ? navigation.elements : undefined,
          handleNextClick: this.handleNextClick,
          handlePrevClick: this.handlePrevClick }) : _react2.default.createElement('navigation', {
          page: page,
          pages: pages,
          handleNextClick: this.handleNextClick,
          handlePrevClick: this.handlePrevClick });
      }

      return _react2.default.createElement(
        'div',
        { className: css ? css : "mgrpdf__wrapper", style: mgrpdfStyles.wrapper },
        pdf,
        nav
      );
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
  scale: _react.PropTypes.number,
  css: _react.PropTypes.string,

  navigation: _react.PropTypes.oneOfType([
  // Can be an object with css classes or react elements to be rendered
  _react.PropTypes.shape({
    css: _react.PropTypes.shape({
      previousPageBtn: _react.PropTypes.string,
      nextPageBtn: _react.PropTypes.string,
      pages: _react.PropTypes.string,
      wrapper: _react.PropTypes.string
    }),
    elements: _react.PropTypes.shape({
      previousPageBtn: _react.PropTypes.any,
      nextPageBtn: _react.PropTypes.any,
      pages: _react.PropTypes.any
    })
  }),
  // Or a full navigation component
  _react.PropTypes.any])
};

PDFViewer.defaultProps = {
  page: 1,
  scale: 1
};

exports.default = PDFViewer;
