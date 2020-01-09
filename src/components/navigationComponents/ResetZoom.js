import React from 'react'
import PropTypes from 'prop-types'

const ResetZoom = ({ css, scale, defaultScale, handleResetZoom }) => {
    const resetZoomClass = css || 'button is-black'

    if (scale === defaultScale) {
        return (
            <button className={resetZoomClass} disabled>
                <i className='material-icons'>refresh</i>
            </button>
        )
    }

    return (
        <button className={resetZoomClass} onClick={handleResetZoom}>
            <i className='material-icons'>refresh</i>
        </button>
    )
}

ResetZoom.propTypes = {
    css: PropTypes.string,
    scale: PropTypes.number.isRequired,
    defaultScale: PropTypes.number.isRequired,
    handleResetZoom: PropTypes.func.isRequired,
}

export default ResetZoom
