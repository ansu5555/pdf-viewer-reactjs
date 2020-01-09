import React from 'react'
import PropTypes from 'prop-types'

const ZoomOut = ({ css, scale, minScale, handleZoomOut }) => {
    const zoomOutClass = css || 'button is-black'

    if (scale === minScale) {
        return (
            <button className={zoomOutClass} disabled>
                <i className='material-icons'>zoom_out</i>
            </button>
        )
    }

    return (
        <button className={zoomOutClass} onClick={handleZoomOut}>
            <i className='material-icons'>zoom_out</i>
        </button>
    )
}

ZoomOut.propTypes = {
    css: PropTypes.string,
    scale: PropTypes.number.isRequired,
    minScale: PropTypes.number.isRequired,
    handleZoomOut: PropTypes.func.isRequired,
}

export default ZoomOut
