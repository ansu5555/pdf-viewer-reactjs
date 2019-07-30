'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var PDF = _interopDefault(require('react-pdf-js'));
var jquery_dist_jquery_min_js = require('jquery/dist/jquery.min.js');
var bootstrap_dist_css_bootstrap_min_css = require('bootstrap/dist/css/bootstrap.min.css');
var bootstrap_dist_js_bootstrap_min_js = require('bootstrap/dist/js/bootstrap.min.js');
var materialDesignIcons_iconfont_materialIcons_css = require('material-design-icons/iconfont/material-icons.css');

var NextPageButton = function NextPageButton(_ref) {
    var css = _ref.css,
        page = _ref.page,
        pages = _ref.pages,
        handleNextClick = _ref.handleNextClick;

    var nextClass = '\n    ' + (css ? css : 'btn btn-sm btn-link text-white pl-2') + '\n    ' + (page === pages ? ' disabled' : '') + '\n  ';

    return React.createElement(
        'button',
        { className: nextClass, onClick: handleNextClick },
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
        { className: pagesClass },
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

    var prevClass = '\n    ' + (css ? css : 'btn btn-sm btn-link text-white pr-2') + '\n    ' + (page === 1 ? ' disabled' : '') + '\n  ';

    return React.createElement(
        'button',
        { className: prevClass, onClick: handlePrevClick },
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
        minScale = _ref.minScale,
        css = _ref.css,
        handleZoomOut = _ref.handleZoomOut;

    var zoomOutClass = '' + (css ? css : 'btn btn-sm btn-link text-white pr-2') + (scale === minScale ? ' disabled' : '');

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
    var scale = _ref.scale,
        defaultScale = _ref.defaultScale,
        css = _ref.css,
        handleResetZoom = _ref.handleResetZoom;

    var resetZoomClass = (css ? css : 'btn btn-sm btn-link text-white px-2') + '\n    ' + (scale === defaultScale ? ' disabled' : '');

    return React.createElement(
        'button',
        {
            type: 'button',
            className: resetZoomClass,
            onClick: handleResetZoom },
        React.createElement(
            'i',
            { className: 'material-icons' },
            'refresh'
        )
    );
};

ResetZoom.propTypes = {
    css: PropTypes.string,
    handleResetZoom: PropTypes.func.isRequired
};

var RotateLeft = function RotateLeft(_ref) {
    var css = _ref.css,
        rotationAngle = _ref.rotationAngle,
        handleRotateLeft = _ref.handleRotateLeft;

    var rotateLeftClass = '\n    ' + (css ? css : 'btn btn-sm btn-link text-white pr-2') + '\n    ' + (rotationAngle === -90 ? ' disabled' : '') + '\n  ';

    return React.createElement(
        'button',
        {
            type: 'button',
            className: rotateLeftClass,
            onClick: handleRotateLeft },
        React.createElement(
            'i',
            { className: 'material-icons' },
            'rotate_left'
        )
    );
};

RotateLeft.propTypes = {
    css: PropTypes.string,
    rotationAngle: PropTypes.number.isRequired,
    handleRotateLeft: PropTypes.func.isRequired
};

var ResetRotation = function ResetRotation(_ref) {
    var css = _ref.css,
        rotationAngle = _ref.rotationAngle,
        handleResetRotation = _ref.handleResetRotation;

    var resetRotationClass = '\n    ' + (css ? css : 'btn btn-sm btn-link text-white px-2') + '\n    ' + (rotationAngle === 0 || rotationAngle === 360 ? ' disabled' : '') + '\n  ';

    return React.createElement(
        'button',
        {
            type: 'button',
            className: resetRotationClass,
            onClick: handleResetRotation },
        React.createElement(
            'i',
            { className: 'material-icons' },
            'refresh'
        )
    );
};
ResetRotation.propTypes = {
    css: PropTypes.string,
    rotationAngle: PropTypes.number.isRequired,
    handleResetRotation: PropTypes.func.isRequired
};

var RotateRight = function RotateRight(_ref) {
    var css = _ref.css,
        rotationAngle = _ref.rotationAngle,
        handleRotateRight = _ref.handleRotateRight;

    var rotateRightClass = '\n    ' + (css ? css : 'btn btn-sm btn-link text-white pl-2') + '\n    ' + (rotationAngle === 90 ? ' disabled' : '') + '\n  ';

    return React.createElement(
        'button',
        {
            type: 'button',
            className: rotateRightClass,
            onClick: handleRotateRight },
        React.createElement(
            'i',
            { className: 'material-icons' },
            'rotate_right'
        )
    );
};
RotateRight.propTypes = {
    css: PropTypes.string,
    rotationAngle: PropTypes.number.isRequired,
    handleRotateRight: PropTypes.func.isRequired
};

var Navigation = function Navigation(_ref) {
    var page = _ref.page,
        pages = _ref.pages,
        scale = _ref.scale,
        defaultScale = _ref.defaultScale,
        maxScale = _ref.maxScale,
        minScale = _ref.minScale,
        rotationAngle = _ref.rotationAngle,
        hideZoom = _ref.hideZoom,
        hideRotation = _ref.hideRotation,
        css = _ref.css,
        handlePrevClick = _ref.handlePrevClick,
        handleNextClick = _ref.handleNextClick,
        handleZoomIn = _ref.handleZoomIn,
        handleResetZoom = _ref.handleResetZoom,
        handleZoomOut = _ref.handleZoomOut,
        handleRotateLeft = _ref.handleRotateLeft,
        handleResetRotation = _ref.handleResetRotation,
        handleRotateRight = _ref.handleRotateRight;

    return React.createElement(
        'div',
        {
            className: css.navbarWrapper ? css.navbarWrapper : 'container rounded bg-dark text-white' },
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-sm-4' },
                hideZoom ? undefined : React.createElement(
                    'div',
                    { className: 'btn-group', role: 'group' },
                    React.createElement(ZoomOut, {
                        scale: scale,
                        minScale: minScale,
                        css: css.zoomOutBtn,
                        handleZoomOut: handleZoomOut
                    }),
                    React.createElement(ResetZoom, {
                        scale: scale,
                        defaultScale: defaultScale,
                        css: css.resetZoomBtn,
                        handleResetZoom: handleResetZoom
                    }),
                    React.createElement(ZoomIn, {
                        scale: scale,
                        maxScale: maxScale,
                        css: css.zoomInBtn,
                        handleZoomIn: handleZoomIn
                    })
                )
            ),
            React.createElement(
                'div',
                { className: 'col-sm-4' },
                React.createElement(
                    'div',
                    { className: 'btn-group', role: 'group' },
                    React.createElement(PreviousPageButton, {
                        css: css.previousPageBtn,
                        page: page,
                        pages: pages,
                        handlePrevClick: handlePrevClick
                    }),
                    React.createElement(PagesIndicator, {
                        css: css.pageIndicator,
                        page: page,
                        pages: pages
                    }),
                    React.createElement(NextPageButton, {
                        css: css.nextPageBtn,
                        page: page,
                        pages: pages,
                        handleNextClick: handleNextClick
                    })
                )
            ),
            React.createElement(
                'div',
                { className: 'col-sm-4' },
                hideRotation ? undefined : React.createElement(
                    'div',
                    { className: 'btn-group', role: 'group' },
                    React.createElement(RotateLeft, {
                        css: css.rotateLeftBtn,
                        rotationAngle: rotationAngle,
                        handleRotateLeft: handleRotateLeft
                    }),
                    React.createElement(ResetRotation, {
                        css: css.resetRotationBtn,
                        rotationAngle: rotationAngle,
                        handleResetRotation: handleResetRotation
                    }),
                    React.createElement(RotateRight, {
                        css: css.rotateRightBtn,
                        rotationAngle: rotationAngle,
                        handleRotateRight: handleRotateRight
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

var Styles = {
    canvas: {
        height: '1000px',
        maxHeight: '1000px',
        maxWidth: '1000px',
        overflow: 'auto'
    }
};

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
            defaultScale: 1,
            scaleStep: 1,
            maxScale: 3,
            minScale: 1,
            rotationAngle: 0
        }, _this.onDocumentComplete = function (pages) {
            _this.setState({
                pages: pages
            });
        }, _this.handlePrevClick = function () {
            if (_this.state.page === 1) return;

            _this.setState({
                page: _this.state.page - 1
            });

            if (_this.props.onPrevBtnClick) {
                _this.props.onPrevBtnClick(_this.state.page - 1);
            }
        }, _this.handleNextClick = function () {
            if (_this.state.page === _this.state.pages) return;

            _this.setState({
                page: _this.state.page + 1
            });

            if (_this.props.onNextBtnClick) {
                _this.props.onNextBtnClick(_this.state.page + 1);
            }
        }, _this.handleZoomIn = function () {
            if (_this.state.scale < _this.state.maxScale) {
                _this.setState({
                    scale: _this.state.scale + _this.state.scaleStep
                });
            }

            if (_this.props.onZoom) {
                _this.props.onZoom(_this.state.scale + _this.state.scaleStep);
            }
        }, _this.handleResetZoom = function () {
            _this.setState({
                scale: _this.state.defaultScale
            });

            if (_this.props.onZoom) {
                _this.props.onZoom(_this.state.defaultScale);
            }
        }, _this.handleZoomOut = function () {
            if (_this.state.scale > _this.state.minScale) {
                _this.setState({
                    scale: _this.state.scale - _this.state.scaleStep
                });
            }

            if (_this.props.onZoom) {
                _this.props.onZoom(_this.state.scale - _this.state.scaleStep);
            }
        }, _this.handleRotateLeft = function () {
            if (_this.state.rotationAngle !== -90) {
                _this.setState({
                    rotationAngle: -90
                });
            }

            if (_this.props.onRotation) {
                _this.props.onRotation(-90);
            }
        }, _this.handleResetRotation = function () {
            if (_this.state.rotationAngle !== 0 || _this.state.rotationAngle !== 360) {
                _this.setState({
                    rotationAngle: 360
                });
            }

            if (_this.props.onRotation) {
                _this.props.onRotation(0);
            }
        }, _this.handleRotateRight = function () {
            if (_this.state.rotationAngle !== 90) {
                _this.setState({
                    rotationAngle: 90
                });
            }

            if (_this.props.onRotation) {
                _this.props.onRotation(90);
            }
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    createClass(PDFViewer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                pages: null,
                page: this.props.page || this.state.page,
                scale: this.props.scale || this.state.scale,
                defaultScale: this.props.scale || this.state.scale,
                scaleStep: this.props.scaleStep || this.state.scaleStep,
                maxScale: this.props.maxScale || this.state.maxScale,
                minScale: this.props.minScale || this.state.minScale,
                rotationAngle: this.props.rotationAngle || this.state.rotationAngle
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var source = this.props.document;
            var _props = this.props,
                loader = _props.loader,
                hideNavbar = _props.hideNavbar,
                hideZoom = _props.hideZoom,
                hideRotation = _props.hideRotation,
                navbarOnTop = _props.navbarOnTop,
                navigation = _props.navigation,
                css = _props.css,
                canvasCss = _props.canvasCss,
                onDocumentClick = _props.onDocumentClick;
            var _state = this.state,
                page = _state.page,
                pages = _state.pages,
                scale = _state.scale,
                defaultScale = _state.defaultScale,
                maxScale = _state.maxScale,
                minScale = _state.minScale,
                rotationAngle = _state.rotationAngle;


            var NavigationElement = navigation;

            var pdf = React.createElement(PDF, {
                file: source.file || source.url,
                content: source.base64,
                binaryContent: source.binary,
                documentInitParameters: source.connection,
                loading: loader,
                page: page,
                scale: scale,
                rotate: rotationAngle,
                onDocumentComplete: this.onDocumentComplete
            });

            var nav = null;
            if (!hideNavbar && pages > 0) {
                nav = !navigation || navigation && (typeof navigation === 'undefined' ? 'undefined' : _typeof(navigation)) === 'object' ? React.createElement(Navigation, {
                    page: page,
                    pages: pages,
                    scale: scale,
                    defaultScale: defaultScale,
                    maxScale: maxScale,
                    minScale: minScale,
                    rotationAngle: rotationAngle,
                    hideZoom: hideZoom,
                    hideRotation: hideRotation,
                    css: navigation ? navigation.css : undefined,
                    handleNextClick: this.handleNextClick,
                    handlePrevClick: this.handlePrevClick,
                    handleZoomIn: this.handleZoomIn,
                    handleResetZoom: this.handleResetZoom,
                    handleZoomOut: this.handleZoomOut,
                    handleRotateLeft: this.handleRotateLeft,
                    handleResetRotation: this.handleResetRotation,
                    handleRotateRight: this.handleRotateRight
                }) : React.createElement(NavigationElement, {
                    page: page,
                    pages: pages,
                    scale: scale,
                    defaultScale: defaultScale,
                    maxScale: maxScale,
                    minScale: minScale,
                    rotationAngle: rotationAngle,
                    hideZoom: hideZoom,
                    hideRotation: hideRotation,
                    handleNextClick: this.handleNextClick,
                    handlePrevClick: this.handlePrevClick,
                    handleZoomIn: this.handleZoomIn,
                    handleResetZoom: this.handleResetZoom,
                    handleZoomOut: this.handleZoomOut,
                    handleRotateLeft: this.handleRotateLeft,
                    handleResetRotation: this.handleResetRotation,
                    handleRotateRight: this.handleRotateRight
                });
            }

            return React.createElement(
                'div',
                { className: css ? css : 'container text-center' },
                navbarOnTop ? React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        null,
                        nav
                    ),
                    React.createElement(
                        'div',
                        {
                            className: canvasCss ? canvasCss : '',
                            style: canvasCss ? {} : Styles.canvas,
                            onClick: onDocumentClick },
                        pdf
                    )
                ) : React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        {
                            className: canvasCss ? canvasCss : '',
                            style: canvasCss ? {} : Styles.canvas,
                            onClick: onDocumentClick },
                        pdf
                    ),
                    React.createElement(
                        'div',
                        null,
                        nav
                    )
                )
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
    scaleStep: PropTypes.number,
    maxScale: PropTypes.number,
    minScale: PropTypes.number,
    css: PropTypes.string,
    canvasCss: PropTypes.string,
    rotationAngle: PropTypes.number,
    onDocumentClick: PropTypes.func,
    onPrevBtnClick: PropTypes.func,
    onNextBtnClick: PropTypes.func,
    onZoom: PropTypes.func,
    onRotation: PropTypes.func,
    hideNavbar: PropTypes.bool,
    navbarOnTop: PropTypes.bool,
    hideZoom: PropTypes.bool,
    hideRotation: PropTypes.bool,
    navigation: PropTypes.oneOfType([
    // Can be an object with css classes or react elements to be rendered
    PropTypes.shape({
        css: PropTypes.shape({
            navbarWrapper: PropTypes.string,
            zoomOutBtn: PropTypes.string,
            resetZoomBtn: PropTypes.string,
            zoomInBtn: PropTypes.string,
            previousPageBtn: PropTypes.string,
            pageIndicator: PropTypes.string,
            nextPageBtn: PropTypes.string,
            rotateLeftBtn: PropTypes.string,
            resetRotationBtn: PropTypes.string,
            rotateRightBtn: PropTypes.string
        })
    }),
    // Or a full navigation component
    PropTypes.any])
};

PDFViewer.defaultProps = {
    hideNavbar: false,
    hideZoom: false,
    hideRotation: false,
    navbarOnTop: false
};

module.exports = PDFViewer;
