import React from 'react'
import PropTypes from 'prop-types'
import NextPageButton from './NavigationComponents/NextPageButton'
import PagesIndicator from './NavigationComponents/PagesIndicator'
import PreviousPageButton from './NavigationComponents/PreviousPageButton'
import ZoomIn from './NavigationComponents/ZoomIn'
import ZoomOut from './NavigationComponents/ZoomOut'
import ResetZoom from './NavigationComponents/ResetZoom'
import RotateLeft from './NavigationComponents/RotateLeft'
import ResetRotation from './NavigationComponents/ResetRotation'
import RotateRight from './NavigationComponents/RotateRight'

const Navigation = ({
    page,
    pages,
    scale,
    defaultScale,
    maxScale,
    minScale,
    rotationAngle,
    hideZoom,
    hideRotation,
    css,
    handlePrevClick,
    handleNextClick,
    handleZoomIn,
    handleResetZoom,
    handleZoomOut,
    handleRotateLeft,
    handleResetRotation,
    handleRotateRight,
}) => {
    return (
        <div
            className={
                css.navbarWrapper
                    ? css.navbarWrapper
                    : 'container rounded bg-dark text-white'
            }>
            <div className='row'>
                <div className='col-sm-4'>
                    {hideZoom ? (
                        undefined
                    ) : (
                        <div className='btn-group' role='group'>
                            <ZoomOut
                                scale={scale}
                                minScale={minScale}
                                css={css.zoomOutBtn}
                                handleZoomOut={handleZoomOut}
                            />
                            <ResetZoom
                                scale={scale}
                                defaultScale={defaultScale}
                                css={css.resetZoomBtn}
                                handleResetZoom={handleResetZoom}
                            />
                            <ZoomIn
                                scale={scale}
                                maxScale={maxScale}
                                css={css.zoomInBtn}
                                handleZoomIn={handleZoomIn}
                            />
                        </div>
                    )}
                </div>
                <div className='col-sm-4'>
                    <div className='btn-group' role='group'>
                        <PreviousPageButton
                            css={css.previousPageBtn}
                            page={page}
                            pages={pages}
                            handlePrevClick={handlePrevClick}
                        />
                        <PagesIndicator
                            css={css.pageIndicator}
                            page={page}
                            pages={pages}
                        />
                        <NextPageButton
                            css={css.nextPageBtn}
                            page={page}
                            pages={pages}
                            handleNextClick={handleNextClick}
                        />
                    </div>
                </div>
                <div className='col-sm-4'>
                    {hideRotation ? (
                        undefined
                    ) : (
                        <div className='btn-group' role='group'>
                            <RotateLeft
                                css={css.rotateLeftBtn}
                                rotationAngle={rotationAngle}
                                handleRotateLeft={handleRotateLeft}
                            />
                            <ResetRotation
                                css={css.resetRotationBtn}
                                rotationAngle={rotationAngle}
                                handleResetRotation={handleResetRotation}
                            />
                            <RotateRight
                                css={css.rotateRightBtn}
                                rotationAngle={rotationAngle}
                                handleRotateRight={handleRotateRight}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

Navigation.propTypes = {
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    scale: PropTypes.number,
    defaultScale: PropTypes.number,
    maxScale: PropTypes.number,
    minScale: PropTypes.number,
    rotationAngle: PropTypes.number,
    hideZoom: PropTypes.bool,
    hideRotation: PropTypes.bool,

    css: PropTypes.shape({
        navbarWrapper: PropTypes.string,
        pages: PropTypes.string,
        pageIndicator: PropTypes.string,
        previousPageBtn: PropTypes.string,
        nextPageBtn: PropTypes.string,
        zoomOutBtn: PropTypes.string,
        resetZoomBtn: PropTypes.string,
        zoomInBtn: PropTypes.string,
        rotateLeftBtn: PropTypes.string,
        resetRotationBtn: PropTypes.string,
        rotateRightBtn: PropTypes.string,
    }),

    elements: PropTypes.shape({
        previousPageBtn: PropTypes.any,
        nextPageBtn: PropTypes.any,
        pages: PropTypes.any,
    }),

    handlePrevClick: PropTypes.func.isRequired,
    handleNextClick: PropTypes.func.isRequired,
    handleZoomIn: PropTypes.func.isRequired,
    handleResetZoom: PropTypes.func.isRequired,
    handleZoomOut: PropTypes.func.isRequired,
    handleRotateLeft: PropTypes.func.isRequired,
    handleResetRotation: PropTypes.func.isRequired,
    handleRotateRight: PropTypes.func.isRequired,
}

Navigation.defaultProps = {
    css: {},
    elements: {},
}

export default Navigation
