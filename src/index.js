import React from 'react';
import PropTypes from 'prop-types';
import PDF from 'react-pdf-js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'material-design-icons/iconfont/material-icons.css';

import Navigation from './Navigation';
import Styles from './Styles';

class PDFViewer extends React.Component {
    state = {
        pages: 0,
        page: 1,
        scale: 1,
        scaleStep: 1,
        maxScale: 3,
        rotationAngle: 0
    };

    componentDidMount() {
        this.setState({
            pages: null,
            page: this.props.page || this.state.page,
            scale: this.props.scale || this.state.scale,
            scaleStep: this.props.scaleStep || this.state.scaleStep,
            maxScale: this.props.maxScale || this.state.maxScale,
            rotationAngle: this.props.rotationAngle || this.state.rotationAngle
        });
    }

    onDocumentComplete = pages => {
        this.setState({
            pages
        });
    };

    handlePrevClick = () => {
        if (this.state.page === 1) return;

        this.setState({
            page: this.state.page - 1
        });
    };

    handleNextClick = () => {
        if (this.state.page === this.state.pages) return;

        this.setState({
            page: this.state.page + 1
        });
    };

    handleZoomIn = () => {
        if (this.state.scale < this.state.maxScale) {
            this.setState({
                scale: this.state.scale + this.state.scaleStep
            });
        }
    };

    handleResetZoom = () => {
        this.setState({
            scale: 1
        });
    };

    handleZoomOut = () => {
        if (this.state.scale > 1) {
            this.setState({
                scale: this.state.scale - this.state.scaleStep
            });
        }
    };

    handleRotateLeft = () => {
        if (this.state.rotationAngle !== -90) {
            this.setState({
                rotationAngle: -90
            });
        }
    };

    handleResetRotation = () => {
        if (
            this.state.rotationAngle !== 0 ||
            this.state.rotationAngle !== 360
        ) {
            this.setState({
                rotationAngle: 360
            });
        }
    };

    handleRotateRight = () => {
        if (this.state.rotationAngle !== 90) {
            this.setState({
                rotationAngle: 90
            });
        }
    };

    render() {
        const source = this.props.document;
        const {
            loader,
            hideNavbar,
            hideZoom,
            hideRotation,
            navbarOnTop,
            navigation,
            css,
            canvasCss,
            onDocumentClick
        } = this.props;

        const { page, pages, scale, maxScale, rotationAngle } = this.state;

        const NavigationElement = navigation;

        const pdf = (
            <PDF
                file={source.file || source.url}
                content={source.base64}
                binaryContent={source.binary}
                documentInitParameters={source.connection}
                loading={loader}
                page={page}
                scale={scale}
                rotate={rotationAngle}
                onDocumentComplete={this.onDocumentComplete}
            />
        );

        let nav = null;
        if (!hideNavbar && pages > 0) {
            nav =
                !navigation ||
                (navigation && typeof navigation === 'object') ? (
                    <Navigation
                        page={page}
                        pages={pages}
                        scale={scale}
                        maxScale={maxScale}
                        rotationAngle={rotationAngle}
                        hideZoom={hideZoom}
                        hideRotation={hideRotation}
                        css={navigation ? navigation.css : undefined}
                        handleNextClick={this.handleNextClick}
                        handlePrevClick={this.handlePrevClick}
                        handleZoomIn={this.handleZoomIn}
                        handleResetZoom={this.handleResetZoom}
                        handleZoomOut={this.handleZoomOut}
                        handleRotateLeft={this.handleRotateLeft}
                        handleResetRotation={this.handleResetRotation}
                        handleRotateRight={this.handleRotateRight}
                    />
                ) : (
                    <NavigationElement
                        page={page}
                        pages={pages}
                        scale={scale}
                        maxScale={maxScale}
                        rotationAngle={rotationAngle}
                        hideZoom={hideZoom}
                        hideRotation={hideRotation}
                        handleNextClick={this.handleNextClick}
                        handlePrevClick={this.handlePrevClick}
                        handleZoomIn={this.handleZoomIn}
                        handleResetZoom={this.handleResetZoom}
                        handleZoomOut={this.handleZoomOut}
                        handleRotateLeft={this.handleRotateLeft}
                        handleResetRotation={this.handleResetRotation}
                        handleRotateRight={this.handleRotateRight}
                    />
                );
        }

        return (
            <div className={css ? css : 'container text-center'}>
                {navbarOnTop ? (
                    <div>
                        <div>{nav}</div>
                        <div
                            className={canvasCss ? canvasCss : ''}
                            style={canvasCss ? {} : Styles.canvas}
                            onClick={onDocumentClick}>
                            {pdf}
                        </div>
                    </div>
                ) : (
                    <div>
                        <div
                            className={canvasCss ? canvasCss : ''}
                            style={canvasCss ? {} : Styles.canvas}
                            onClick={onDocumentClick}>
                            {pdf}
                        </div>
                        <div>{nav}</div>
                    </div>
                )}
            </div>
        );
    }
}

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
    css: PropTypes.string,
    canvasCss: PropTypes.string,
    rotationAngle: PropTypes.number,
    onDocumentClick: PropTypes.func,
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
        PropTypes.any
    ])
};

PDFViewer.defaultProps = {
    hideNavbar: false,
    hideZoom: false,
    hideRotation: false,
    navbarOnTop: false
};

export default PDFViewer;
