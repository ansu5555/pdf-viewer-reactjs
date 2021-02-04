import React from 'react'
import PropTypes from 'prop-types'
try {
    require('bulma/css/bulma.css')
    require('bulma-helpers/css/bulma-helpers.min.css')
    require('material-design-icons/iconfont/material-icons.css')
} catch (error) {}

import PDF from './components/RenderPdf'
import Navigation from './components/NavigationBar'
import Loader from './components/Loader'

class PDFViewer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: this.props.page,
            prevPropPage: this.props.page,
            scale: this.props.scale,
            prevPropScale: this.props.scale,
            rotationAngle: this.props.rotationAngle,
            prevPropRotationAngle: this.props.rotationAngle,
            pages: 0,
            defaultScale: this.props.scale,
            isReady: false,
        }
        this.getPageCount = this.getPageCount.bind(this)
        this.handleThumbnailClick = this.handleThumbnailClick.bind(this)
        this.handlePrevClick = this.handlePrevClick.bind(this)
        this.handleNextClick = this.handleNextClick.bind(this)
        this.handleZoomIn = this.handleZoomIn.bind(this)
        this.handleResetZoom = this.handleResetZoom.bind(this)
        this.handleZoomOut = this.handleZoomOut.bind(this)
        this.handleRotateLeft = this.handleRotateLeft.bind(this)
        this.handleResetRotation = this.handleResetRotation.bind(this)
        this.handleRotateRight = this.handleRotateRight.bind(this)
    }

    getPageCount(pages) {
        if (this.state.pages !== pages) {
            this.setState({ pages, isReady: true })
            if (this.props.getMaxPageCount) {
                this.props.getMaxPageCount(pages)
            }
        }
    }

    handleThumbnailClick(page) {
        if (this.state.page !== page) {
            this.setState({ page })
        }
    }

    handlePrevClick() {
        if (this.state.page === 1) return

        this.setState(state => ({
            page: state.page - 1,
        }))

        if (this.props.onPrevBtnClick) {
            this.props.onPrevBtnClick(this.state.page - 1)
        }
    }

    handleNextClick() {
        if (this.state.page === this.pages) return

        this.setState(state => ({
            page: state.page + 1,
        }))

        if (this.props.onNextBtnClick) {
            this.props.onNextBtnClick(this.state.page + 1)
        }
    }

    handleZoomIn() {
        let checkScale = this.props.maxScale
        if (this.state.defaultScale > this.props.maxScale) {
            checkScale = this.state.defaultScale
        }

        if (this.state.scale < checkScale) {
            this.setState((state, props) => ({
                scale: state.scale + props.scaleStep,
            }))
        }

        if (this.props.onZoom) {
            this.props.onZoom(this.state.scale + this.props.scaleStep)
        }
    }

    handleResetZoom() {
        this.setState(state => ({
            scale: state.defaultScale,
        }))

        if (this.props.onZoom) {
            this.props.onZoom(this.state.defaultScale)
        }
    }

    handleZoomOut() {
        let checkScale = this.props.minScale
        if (this.state.defaultScale < this.props.minScale) {
            checkScale = this.state.defaultScale
        }

        if (this.state.scale > checkScale) {
            this.setState((state, props) => ({
                scale: state.scale - props.scaleStep,
            }))
        }

        if (this.props.onZoom) {
            this.props.onZoom(this.state.scale - this.props.scaleStep)
        }
    }

    handleRotateLeft() {
        if (this.state.rotationAngle !== -90) {
            this.setState({
                rotationAngle: -90,
            })
        }

        if (this.props.onRotation) {
            this.props.onRotation(-90)
        }
    }

    handleResetRotation() {
        if (this.state.rotationAngle !== 0) {
            this.setState({
                rotationAngle: 0,
            })
        }

        if (this.props.onRotation) {
            this.props.onRotation(0)
        }
    }

    handleRotateRight() {
        if (this.state.rotationAngle !== 90) {
            this.setState({
                rotationAngle: 90,
            })
        }

        if (this.props.onRotation) {
            this.props.onRotation(90)
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (!props.externalInput) {
            return null
        }

        if (props.page !== state.prevPropPage) {
            if (1 <= props.page && props.page <= state.pages) {
                return { page: props.page, prevPropPage: props.page }
            }
        }
        if (props.scale !== state.prevPropScale) {
            if (
                props.minScale <= props.scale &&
                props.scale <= props.maxScale
            ) {
                return { scale: props.scale, prevPropScale: props.scale }
            }
        }
        if (props.rotationAngle !== state.prevPropRotationAngle) {
            if (
                props.rotationAngle === 90 ||
                props.rotationAngle === 0 ||
                props.rotationAngle === -90
            ) {
                return {
                    rotationAngle: props.rotationAngle,
                    prevPropRotationAngle: props.rotationAngle,
                }
            }
        }
        return null
    }

    render() {
        const {
            document,
            withCredentials,
            password,
            loader,
            maxScale,
            minScale,
            externalInput,
            hideNavbar,
            hideZoom,
            hideRotation,
            navbarOnTop,
            navigation,
            css,
            canvasCss,
            onDocumentClick,
            showThumbnail,
            protectContent,
            watermark,
            alert,
        } = this.props

        const { page, pages, scale, defaultScale, rotationAngle } = this.state

        const NavigationElement = navigation

        const pdf = (
            <PDF
                document={document}
                withCredentials={withCredentials}
                password={password}
                pageNum={page}
                scale={scale}
                rotation={rotationAngle}
                changePage={idx => this.handleThumbnailClick(idx)}
                pageCount={num => this.getPageCount(num)}
                showThumbnail={showThumbnail}
                protectContent={protectContent}
                watermark={watermark}
                alert={alert}
                canvasCss={canvasCss}
            />
        )

        let nav = null
        let hideNavbarDisplay = hideNavbar
        if (externalInput) {
            hideNavbarDisplay = true
        }
        if (!hideNavbarDisplay && pages > 0) {
            nav =
                !navigation || typeof navigation === 'object' ? (
                    <Navigation
                        page={page}
                        pages={pages}
                        scale={scale}
                        defaultScale={defaultScale}
                        maxScale={maxScale}
                        minScale={minScale}
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
                        defaultScale={defaultScale}
                        maxScale={maxScale}
                        minScale={minScale}
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
                )
        }

        return (
            <div className={css ? css : 'container text-center'}>
                <div style={{ display: this.state.isReady ? 'none' : 'block' }}>
                    <div
                        className={canvasCss ? canvasCss : ''}
                        style={
                            canvasCss
                                ? {}
                                : {
                                      height: '1000px',
                                      overflow: 'auto',
                                  }
                        }>
                        {loader ? loader : <Loader />}
                    </div>
                </div>
                <div style={{ display: this.state.isReady ? 'block' : 'none' }}>
                    {navbarOnTop ? (
                        <div>
                            <div>{nav}</div>
                            <div onClick={onDocumentClick}>{pdf}</div>
                        </div>
                    ) : (
                        <div>
                            <div onClick={onDocumentClick}>{pdf}</div>
                            <div>{nav}</div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

PDFViewer.propTypes = {
    document: PropTypes.shape({
        url: PropTypes.string, // File path
        base64: PropTypes.string, // PDF file encoded in base64
    }).isRequired,
    withCredentials: PropTypes.bool,
    password: PropTypes.string,
    loader: PropTypes.node,
    externalInput: PropTypes.bool,
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
    getMaxPageCount: PropTypes.func,
    hideNavbar: PropTypes.bool,
    navbarOnTop: PropTypes.bool,
    hideZoom: PropTypes.bool,
    hideRotation: PropTypes.bool,
    showThumbnail: PropTypes.shape({
        scale: PropTypes.number,
        rotationAngle: PropTypes.number,
        onTop: PropTypes.bool,
        backgroundColor: PropTypes.string,
        thumbCss: PropTypes.string,
        selectedThumbCss: PropTypes.string,
    }),
    protectContent: PropTypes.bool,
    watermark: PropTypes.shape({
        text: PropTypes.string,
        diagonal: PropTypes.bool,
        opacity: PropTypes.string,
        font: PropTypes.string,
        size: PropTypes.string,
        color: PropTypes.string,
    }),
    alert: PropTypes.any,
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
                rotateRightBtn: PropTypes.string,
            }),
        }),
        // Or a full navigation component
        PropTypes.any,
    ]),
}

PDFViewer.defaultProps = {
    page: 1,
    withCredentials: false,
    password: '',
    scale: 1,
    scaleStep: 1,
    maxScale: 3,
    minScale: 1,
    rotationAngle: 0,
    externalInput: false,
    hideNavbar: false,
    hideZoom: false,
    hideRotation: false,
    navbarOnTop: false,
    canvasCss: '',
}

export default PDFViewer
