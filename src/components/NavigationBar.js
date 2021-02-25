import React from 'react'
import PropTypes from 'prop-types'
import NextPageButton from './navigationComponents/NextPageButton'
import PageIndicator from './navigationComponents/PageIndicator'
import PreviousPageButton from './navigationComponents/PreviousPageButton'
import ZoomIn from './navigationComponents/ZoomIn'
import ZoomOut from './navigationComponents/ZoomOut'
import ResetZoom from './navigationComponents/ResetZoom'
import RotateLeft from './navigationComponents/RotateLeft'
import ResetRotation from './navigationComponents/ResetRotation'
import RotateRight from './navigationComponents/RotateRight'

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
      className={`columns is-gapless ${
        css.navbarWrapper ||
        'box is-mobile has-text-white has-background-black py-4'
      }`}>
      {hideZoom ? (
        <div className='column is-4'></div>
      ) : (
        <div className='column is-flex is-flex-direction-row is-4 buttons are-small has-addons'>
          <ZoomOut
            scale={scale}
            minScale={minScale}
            defaultScale={defaultScale}
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
            defaultScale={defaultScale}
            css={css.zoomInBtn}
            handleZoomIn={handleZoomIn}
          />
        </div>
      )}
      <div className='column is-flex is-flex-direction-row is-4 buttons are-small has-addons is-centered'>
        <PreviousPageButton
          css={css.previousPageBtn}
          page={page}
          pages={pages}
          handlePrevClick={handlePrevClick}
        />
        <PageIndicator css={css.pageIndicator} page={page} pages={pages} />
        <NextPageButton
          css={css.nextPageBtn}
          page={page}
          pages={pages}
          handleNextClick={handleNextClick}
        />
      </div>
      {hideRotation ? (
        <div className='column is-4'></div>
      ) : (
        <div className='column is-flex is-flex-direction-row is-4 buttons are-small has-addons is-right'>
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
