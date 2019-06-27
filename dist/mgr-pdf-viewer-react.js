'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var PDF = _interopDefault(require('react-pdf-js'));
var jquery_dist_jquery_min_js = require('jquery/dist/jquery.min.js');
var bootstrap_dist_css_bootstrap_min_css = require('bootstrap/dist/css/bootstrap.min.css');
var bootstrap_dist_js_bootstrap_min_js = require('bootstrap/dist/js/bootstrap.min.js');
var materialDesignIcons_iconfont_materialIcons_css = require('material-design-icons/iconfont/material-icons.css');

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

    var nextClass = '\n    ' + (css ? css : 'btn btn-sm btn-link pl-0 ml-n3 text-white') + '\n    ' + (page === pages ? ' disabled' : '') + '\n  ';

    return React.createElement(
        'button',
        {
            className: nextClass,
            style: nextClass ? {} : styles.next,
            onClick: handleNextClick },
        React.createElement(
            'i',
            { className: 'material-icons' },
            'keyboard_arrow_right'
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

    var pagesClass = css ? css : 'small pt-2';

    return React.createElement(
        'div',
        { className: pagesClass, style: pagesClass ? {} : styles.pages },
        'Page ' + page + ' / ' + pages
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

    var prevClass = '\n    ' + (css ? css : 'btn btn-sm btn-link pr-0 mr-n3 text-white') + '\n    ' + (page === 1 ? ' disabled' : '') + '\n  ';

    return React.createElement(
        'button',
        {
            className: prevClass,
            style: prevClass ? {} : styles.previous,
            onClick: handlePrevClick },
        React.createElement(
            'i',
            { className: 'material-icons' },
            'keyboard_arrow_left'
        )
    );
};
PreviousPageButton.propTypes = {
    css: PropTypes.string,
    page: PropTypes.number.isRequired,
    handlePrevClick: PropTypes.func.isRequired
};

var ZoomIn = function ZoomIn(_ref) {
    var scale = _ref.scale,
        maxScale = _ref.maxScale,
        css = _ref.css,
        handleZoomIn = _ref.handleZoomIn;

    var zoomInClass = '' + (css ? css : 'btn btn-sm btn-link text-white pl-2') + (scale === maxScale ? ' disabled' : '');

    return React.createElement(
        'button',
        { type: 'button', className: zoomInClass, onClick: handleZoomIn },
        React.createElement(
            'i',
            { className: 'material-icons' },
            'zoom_in'
        )
    );
};

ZoomIn.propTypes = {
    css: PropTypes.string,
    handleZoomIn: PropTypes.func.isRequired
};

var ZoomOut = function ZoomOut(_ref) {
    var scale = _ref.scale,
        css = _ref.css,
        handleZoomOut = _ref.handleZoomOut;

    var zoomOutClass = '' + (css ? css : 'btn btn-sm btn-link text-white pr-2') + (scale === 1 ? ' disabled' : '');

    return React.createElement(
        'button',
        { type: 'button', className: zoomOutClass, onClick: handleZoomOut },
        React.createElement(
            'i',
            { className: 'material-icons' },
            'zoom_out'
        )
    );
};

ZoomOut.propTypes = {
    css: PropTypes.string,
    handleZoomOut: PropTypes.func.isRequired
};

var ResetZoom = function ResetZoom(_ref) {
    var css = _ref.css,
        handleResetZoom = _ref.handleResetZoom;

    var resetZoomClass = css ? css : 'btn btn-sm btn-link text-white px-2';

    return React.createElement(
        'button',
        {
            type: 'button',
            className: resetZoomClass,
            onClick: handleResetZoom },
        React.createElement(
            'i',
            { className: 'material-icons' },
            'youtube_searched_for'
        )
    );
};

ResetZoom.propTypes = {
    css: PropTypes.string,
    handleResetZoom: PropTypes.func.isRequired
};

var Navigation = function Navigation(_ref) {
    var page = _ref.page,
        pages = _ref.pages,
        scale = _ref.scale,
        maxScale = _ref.maxScale,
        css = _ref.css,
        elements = _ref.elements,
        handlePrevClick = _ref.handlePrevClick,
        handleNextClick = _ref.handleNextClick,
        handleZoomIn = _ref.handleZoomIn,
        handleResetZoom = _ref.handleResetZoom,
        handleZoomOut = _ref.handleZoomOut;

    var prevEl = void 0,
        nextEl = void 0,
        pagesEl = void 0;
    if (elements.previousPageBtn) {
        prevEl = React.createElement(elements.previousPageBtn, {
            page: page,
            pages: pages,
            handlePrevClick: handlePrevClick
        });
    } else {
        prevEl = React.createElement(PreviousPageButton, {
            css: css.previousPageBtn,
            page: page,
            pages: pages,
            handlePrevClick: handlePrevClick
        });
    }

    if (elements.nextPageBtn) {
        nextEl = React.createElement(elements.nextPageBtn, {
            page: page,
            pages: pages,
            handleNextClick: handleNextClick
        });
    } else {
        nextEl = React.createElement(NextPageButton, {
            css: css.nextPageBtn,
            page: page,
            pages: pages,
            handleNextClick: handleNextClick
        });
    }

    if (elements.pages) {
        pagesEl = React.createElement(elements.pages, { page: page, pages: pages });
    } else {
        pagesEl = React.createElement(PagesIndicator, { css: css.pages, page: page, pages: pages });
    }

    var wrapperClass = css.wrapper ? css.wrapper : 'container rounded bg-dark text-white';

    return React.createElement(
        'div',
        {
            className: wrapperClass,
            style: wrapperClass ? {} : styles.wrapper },
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-sm-6' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-sm-4 text-right' },
                        prevEl
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-sm-4 text-center' },
                        pagesEl
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-sm-4 text-left' },
                        nextEl
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'col-sm-6' },
                React.createElement(
                    'div',
                    { className: 'btn-group', role: 'group' },
                    React.createElement(ZoomOut, {
                        scale: scale,
                        css: css.zoomOutBtn,
                        handleZoomOut: handleZoomOut
                    }),
                    React.createElement(ResetZoom, {
                        css: css.restZoomBtn,
                        handleResetZoom: handleResetZoom
                    }),
                    React.createElement(ZoomIn, {
                        scale: scale,
                        maxScale: maxScale,
                        css: css.zoomInBtn,
                        handleZoomIn: handleZoomIn
                    })
                )
            )
        )
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
            page: 1,
            scale: 1,
            maxScale: 3
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
        }, _this.handleZoomIn = function () {
            if (_this.state.scale < _this.state.maxScale) {
                _this.setState({
                    scale: _this.state.scale + 1
                });
            }
        }, _this.handleResetZoom = function () {
            _this.setState({
                scale: 1
            });
        }, _this.handleZoomOut = function () {
            if (_this.state.scale > 1) {
                _this.setState({
                    scale: _this.state.scale - 1
                });
            }
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(PDFViewer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                pages: null,
                page: this.props.page || 1,
                scale: this.props.scale || 1,
                maxScale: this.props.maxScale || 3
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref2) {
            var page = _ref2.page,
                scale = _ref2.scale;

            this.setState({
                page: page || this.state.page,
                scale: scale || this.state.scale
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var source = this.props.document;
            var _props = this.props,
                loader = _props.loader,
                hideNavbar = _props.hideNavbar,
                navigation = _props.navigation,
                css = _props.css,
                cssCanvas = _props.cssCanvas,
                onDocumentClick = _props.onDocumentClick;
            var _state = this.state,
                page = _state.page,
                pages = _state.pages,
                scale = _state.scale,
                maxScale = _state.maxScale;


            var NavigationElement = navigation;

            var pdf = React.createElement(PDF, {
                file: source.file || source.url,
                content: source.base64,
                binaryContent: source.binary,
                documentInitParameters: source.connection,
                loading: loader,
                page: page,
                scale: scale,
                onDocumentComplete: this.onDocumentComplete
            });

            var nav = null;
            if (!hideNavbar && pages > 0) {
                nav = !navigation || navigation && (typeof navigation === 'undefined' ? 'undefined' : _typeof(navigation)) === 'object' ? React.createElement(Navigation, {
                    page: page,
                    pages: pages,
                    css: navigation ? navigation.css : undefined,
                    elements: navigation ? navigation.elements : undefined,
                    handleNextClick: this.handleNextClick,
                    handlePrevClick: this.handlePrevClick,
                    handleZoomIn: this.handleZoomIn,
                    handleResetZoom: this.handleResetZoom,
                    handleZoomOut: this.handleZoomOut
                }) : React.createElement(NavigationElement, {
                    page: page,
                    pages: pages,
                    scale: scale,
                    maxScale: maxScale,
                    handleNextClick: this.handleNextClick,
                    handlePrevClick: this.handlePrevClick
                });
            }

            return React.createElement(
                'div',
                {
                    className: css ? css : 'mgrpdf__wrapper',
                    style: mgrpdfStyles.wrapper },
                React.createElement(
                    'div',
                    {
                        className: cssCanvas ? cssCanvas : undefined,
                        onClick: onDocumentClick },
                    pdf
                ),
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
        binary: PropTypes.shape({
            // UInt8Array
            data: PropTypes.any
        })
    }).isRequired,

    loader: PropTypes.node,
    page: PropTypes.number,
    scale: PropTypes.number,
    css: PropTypes.string,
    cssCanvas: PropTypes.string,
    onDocumentClick: PropTypes.func,

    hideNavbar: PropTypes.bool,
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

module.exports = PDFViewer;
