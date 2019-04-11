'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var PDF = _interopDefault(require('react-pdf-js'));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



var set = function set(object, property, value, receiver) {
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent !== null) {
      set(parent, property, value, receiver);
    }
  } else if ("value" in desc && desc.writable) {
    desc.value = value;
  } else {
    var setter = desc.set;

    if (setter !== undefined) {
      setter.call(receiver, value);
    }
  }

  return value;
};

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

var NextPageButton = function NextPageButton(_ref) {
  var css = _ref.css,
      page = _ref.page,
      pages = _ref.pages,
      handleNextClick = _ref.handleNextClick;

  var nextClass = '\n    ' + (css ? css : 'mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--next') + '\n    ' + (page === pages ? ' mgrpdf-navigation__controls--disabled' : '') + '\n  ';

  return React.createElement(
    'div',
    { className: nextClass, style: css ? {} : styles.next, onClick: handleNextClick },
    React.createElement(
      'a',
      null,
      '>'
    )
  );
};
NextPageButton.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handleNextClick: PropTypes.func.isRequired
};

var PagesIndicator = function PagesIndicator(_ref) {
  var css = _ref.css,
      page = _ref.page,
      pages = _ref.pages;

  var pagesClass = css ? css : 'mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--pages';

  return React.createElement(
    'div',
    { className: pagesClass, style: css ? {} : styles.pages },
    page,
    '/',
    pages
  );
};

PagesIndicator.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired
};

var PreviousPageButton = function PreviousPageButton(_ref) {
  var css = _ref.css,
      page = _ref.page,
      handlePrevClick = _ref.handlePrevClick;

  var prevClass = '\n    ' + (css ? css : 'mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--previous') + '\n    ' + (page === 1 ? ' mgrpdf-navigation__controls--disabled' : '') + '\n  ';

  return React.createElement(
    'div',
    { className: prevClass, style: css ? {} : styles.previous, onClick: handlePrevClick },
    React.createElement(
      'a',
      null,
      '<'
    )
  );
};
PreviousPageButton.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  handlePrevClick: PropTypes.func.isRequired
};

var Navigation = function Navigation(_ref) {
  var page = _ref.page,
      pages = _ref.pages,
      css = _ref.css,
      elements = _ref.elements,
      handlePrevClick = _ref.handlePrevClick,
      handleNextClick = _ref.handleNextClick;

  var prevEl = void 0,
      nextEl = void 0,
      pagesEl = void 0;
  if (elements.previousPageBtn) {
    prevEl = React.createElement(elements.previousPageBtn, { page: page, pages: pages, handlePrevClick: handlePrevClick });
  } else {
    prevEl = React.createElement(PreviousPageButton, { css: css.previousPageBtn, page: page, pages: pages, handlePrevClick: handlePrevClick });
  }

  if (elements.nextPageBtn) {
    nextEl = React.createElement(elements.nextPageBtn, { page: page, pages: pages, handleNextClick: handleNextClick });
  } else {
    nextEl = React.createElement(NextPageButton, { css: css.nextPageBtn, page: page, pages: pages, handleNextClick: handleNextClick });
  }

  if (elements.pages) {
    pagesEl = React.createElement(elements.pages, { page: page, pages: pages });
  } else {
    pagesEl = React.createElement(PagesIndicator, { css: css.pages, page: page, pages: pages });
  }

  var wrapperClass = css.wrapper ? css.wrapper : 'mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--wrapper';

  return React.createElement(
    'div',
    { className: wrapperClass, style: css.wrapper ? {} : styles.wrapper },
    prevEl,
    pagesEl,
    nextEl
  );
};

Navigation.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,

  css: PropTypes.shape({
    previousPageBtn: PropTypes.string,
    nextPageBtn: PropTypes.string,
    pages: PropTypes.string,
    wrapper: PropTypes.string
  }),
  elements: PropTypes.shape({
    previousPageBtn: PropTypes.any,
    nextPageBtn: PropTypes.any,
    pages: PropTypes.any
  }),

  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired
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
  inherits(PDFViewer, _React$Component);

  function PDFViewer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, PDFViewer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = PDFViewer.__proto__ || Object.getPrototypeOf(PDFViewer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      pages: 0,
      page: 1
    }, _this.onDocumentComplete = function (pages) {
      _this.setState({
        pages: pages
      });
    }, _this.handlePrevClick = function () {
      if (_this.state.page === 1) return;

      _this.setState({
        page: _this.state.page - 1
      });
    }, _this.handleNextClick = function () {
      if (_this.state.page === _this.state.pages) return;

      _this.setState({
        page: _this.state.page + 1
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(PDFViewer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        pages: null,
        page: this.props.page || 1
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var page = _ref2.page;

      this.setState({ page: page || this.state.page });
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

      var pdf = React.createElement(PDF, {
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
        nav = !navigation || navigation && (typeof navigation === 'undefined' ? 'undefined' : _typeof(navigation)) === 'object' ? React.createElement(Navigation, {
          page: page,
          pages: pages,
          css: navigation ? navigation.css : undefined,
          elements: navigation ? navigation.elements : undefined,
          handleNextClick: this.handleNextClick,
          handlePrevClick: this.handlePrevClick }) : React.createElement(NavigationElement, {
          page: page,
          pages: pages,
          handleNextClick: this.handleNextClick,
          handlePrevClick: this.handlePrevClick });
      }

      return React.createElement(
        'div',
        { className: css ? css : 'mgrpdf__wrapper', style: mgrpdfStyles.wrapper },
        pdf,
        nav
      );
    }
  }]);
  return PDFViewer;
}(React.Component);

PDFViewer.propTypes = {
  document: PropTypes.shape({
    file: PropTypes.any, // File object,
    url: PropTypes.string,
    connection: PropTypes.shape({
      url: PropTypes.string.isRequired // URL to fetch the pdf
    }),
    base64: PropTypes.string, // PDF file encoded in base64
    binary: PropTypes.shape({ // UInt8Array
      data: PropTypes.any
    })
  }).isRequired,

  loader: PropTypes.node,
  page: PropTypes.number,
  scale: PropTypes.number,
  css: PropTypes.string,

  navigation: PropTypes.oneOfType([
  // Can be an object with css classes or react elements to be rendered
  PropTypes.shape({
    css: PropTypes.shape({
      previousPageBtn: PropTypes.string,
      nextPageBtn: PropTypes.string,
      pages: PropTypes.string,
      wrapper: PropTypes.string
    }),
    elements: PropTypes.shape({
      previousPageBtn: PropTypes.any,
      nextPageBtn: PropTypes.any,
      pages: PropTypes.any
    })
  }),
  // Or a full navigation component
  PropTypes.any])
};

PDFViewer.defaultProps = {
  scale: 1
};

module.exports = PDFViewer;
