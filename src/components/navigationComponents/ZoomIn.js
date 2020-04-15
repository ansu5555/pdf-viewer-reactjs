import React from 'react'
import PropTypes from 'prop-types'

const ZoomIn = ({ css, scale, defaultScale, maxScale, handleZoomIn }) => {
    const zoomInClass =
        css ||
        'button is-black is-marginless has-margin-left-5 has-margin-right-5'

    let checkScale = maxScale
    if (defaultScale > maxScale) {
        checkScale = defaultScale
    }

    if (scale.toFixed(2) === checkScale.toFixed(2)) {
        return (
            <button className={zoomInClass} disabled>
                <span className='icon is-small'>
                    <i className='material-icons'>zoom_in</i>
                </span>
            </button>
        )
    }

    return (
        <button className={zoomInClass} onClick={handleZoomIn}>
            <span className='icon is-small'>
                <i className='material-icons'>zoom_in</i>
            </span>
        </button>
    )
}

ZoomIn.propTypes = {
    css: PropTypes.string,
    scale: PropTypes.number.isRequired,
    defaultScale: PropTypes.number.isRequired,
    maxScale: PropTypes.number.isRequired,
    handleZoomIn: PropTypes.func.isRequired,
}

export default ZoomIn
