import React from 'react';
import PropTypes from 'prop-types';
import PDF from 'react-pdf-js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'material-design-icons/iconfont/material-icons.css';

import Navigation from './Navigation';

const mgrpdfStyles = {};

mgrpdfStyles.wrapper = {
    textAlign: 'center'
};

class PDFViewer extends React.Component {
    state = {
        pages: 0,
        page: 1,
        scale: 1,
        maxScale: 3
    };

    componentDidMount() {
        this.setState({
            pages: null,
            page: this.props.page || 1,
            scale: this.props.scale || 1,
            maxScale: this.props.maxScale || 3
        });
    }

    componentWillReceiveProps({ page, scale }) {
        this.setState({
            page: page || this.state.page,
            scale: scale || this.state.scale
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
                scale: this.state.scale + 1
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
                scale: this.state.scale - 1
            });
        }
    };

    render() {
        const source = this.props.document;
        const {
            loader,
            hideNavbar,
            navigation,
            css,
            cssCanvas,
            onDocumentClick
        } = this.props;

        const { page, pages, scale, maxScale } = this.state;

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
                        css={navigation ? navigation.css : undefined}
                        elements={navigation ? navigation.elements : undefined}
                        handleNextClick={this.handleNextClick}
                        handlePrevClick={this.handlePrevClick}
                        handleZoomIn={this.handleZoomIn}
                        handleResetZoom={this.handleResetZoom}
                        handleZoomOut={this.handleZoomOut}
                    />
                ) : (
                    <NavigationElement
                        page={page}
                        pages={pages}
                        scale={scale}
                        maxScale={maxScale}
                        handleNextClick={this.handleNextClick}
                        handlePrevClick={this.handlePrevClick}
                    />
                );
        }

        return (
            <div
                className={css ? css : 'mgrpdf__wrapper'}
                style={mgrpdfStyles.wrapper}>
                <div
                    className={cssCanvas ? cssCanvas : undefined}
                    onClick={onDocumentClick}>
                    {pdf}
                </div>

                {nav}
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
        PropTypes.any
    ])
};

export default PDFViewer;
