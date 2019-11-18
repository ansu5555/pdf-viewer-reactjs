import React from 'react'
import PropTypes from 'prop-types'

const ZoomIn = ({ css, scale, maxScale, handleZoomIn }) => {
    const zoomInClass = `${css || 'btn btn-sm btn-link text-white pl-2'}${
        scale === maxScale ? ' disabled' : ''
    }`

    return (
        <button type='button' className={zoomInClass} onClick={handleZoomIn}>
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
