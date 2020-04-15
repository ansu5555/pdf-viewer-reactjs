import React from 'react'
import PropTypes from 'prop-types'

const ZoomOut = ({ css, scale, defaultScale, minScale, handleZoomOut }) => {
    const zoomOutClass =
        css ||
        'button is-black is-marginless has-margin-left-5 has-margin-right-5'

    let checkScale = minScale
    if (defaultScale < minScale) {
        checkScale = defaultScale
    }

    if (scale.toFixed(2) === checkScale.toFixed(2)) {
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
    defaultScale: PropTypes.number.isRequired,
    minScale: PropTypes.number.isRequired,
    handleZoomOut: PropTypes.func.isRequired,
}

export default ZoomOut
