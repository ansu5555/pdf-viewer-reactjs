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
const displayFlex = {
    display: 'flex',
    alignItems: 'center'
}

const displayFlexCenter = {
    ...displayFlex,
    justifyContent: 'center'
}

const displayFlexSpaceBetween = {
    ...displayFlex,
    justifyContent: 'space-between'
}

const Navigation = ({
    page,
    pages,
    scale,
    maxScale,
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
            <div style={displayFlexSpaceBetween}>
                {!hideZoom && (
                    <div>
                        <ZoomOut
                            scale={scale}
                            css={css.zoomOutBtn}
                            handleZoomOut={handleZoomOut}
                        />
                        <ResetZoom
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
                <div>
                    <div style={displayFlexCenter}>
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
                {!hideRotation && (
                    <div>
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
