import React from 'react';
import PropTypes from 'prop-types';
import NextPageButton from './NextPageButton';
import PagesIndicator from './PagesIndicator';
import PreviousPageButton from './PreviousPageButton';
import ZoomIn from './ZoomIn';
import ZoomOut from './ZoomOut';
import ResetZoom from './ResetZoom';
import RotateLeft from './RotateLeft';
import ResetRotation from './ResetRotation';
import RotateRight from './RotateRight';

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
    handleRotateRight
}) => {
    return (
        <div
            className={
                css.navbarWrapper
                    ? css.navbarWrapper
                    : 'container rounded bg-dark text-white'
            }>
            <div className="row">
                <div className="col-sm-4">
                    {hideZoom ? (
                        undefined
                    ) : (
                        <div className="btn-group" role="group">
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
                <div className="col-sm-4">
                    <div className="btn-group" role="group">
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
                <div className="col-sm-4">
                    {hideRotation ? (
                        undefined
                    ) : (
                        <div className="btn-group" role="group">
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

export default Navigation;
