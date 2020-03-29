import React from 'react'
import PropTypes from 'prop-types'

const ZoomOut = ({ css, scale, minScale, handleZoomOut }) => {
    const zoomOutClass =
        css ||
        'button is-black is-marginless has-margin-left-5 has-margin-right-5'

    if (scale === minScale) {
        return (
            <button className={zoomOutClass} disabled>
                <span className='icon is-small'>
                    <i className='material-icons'>zoom_out</i>
                </span>
            </button>
        )
    }

    return (
        <button className={zoomOutClass} onClick={handleZoomOut}>
            <span className='icon is-small'>
                <i className='material-icons'>zoom_out</i>
            </span>
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
