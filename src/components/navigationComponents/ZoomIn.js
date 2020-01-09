import React from 'react'
import PropTypes from 'prop-types'

const ZoomIn = ({ css, scale, maxScale, handleZoomIn }) => {
    const zoomInClass = css || 'button is-black'

    if (scale === maxScale) {
        return (
            <button className={zoomInClass} disabled>
                <i className='material-icons'>zoom_in</i>
            </button>
        )
    }

    return (
        <button className={zoomInClass} onClick={handleZoomIn}>
            <i className='material-icons'>zoom_in</i>
        </button>
    )
}

ZoomIn.propTypes = {
    css: PropTypes.string,
    scale: PropTypes.number.isRequired,
    maxScale: PropTypes.number.isRequired,
    handleZoomIn: PropTypes.func.isRequired,
}

export default ZoomIn
