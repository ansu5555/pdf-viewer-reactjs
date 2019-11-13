import React from 'react'
import PropTypes from 'prop-types'

const ZoomOut = ({ css, scale, minScale, handleZoomOut }) => {
    const zoomOutClass = `${css || 'btn btn-sm btn-link text-white pr-2'}${
        scale === minScale ? ' disabled' : ''
    }`

    return (
        <button type='button' className={zoomOutClass} onClick={handleZoomOut}>
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
