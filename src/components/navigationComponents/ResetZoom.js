import React from 'react'
import PropTypes from 'prop-types'

const ResetZoom = ({ css, scale, defaultScale, handleResetZoom }) => {
    const resetZoomClass =
        css ||
        'button is-black is-marginless has-margin-left-5 has-margin-right-5'

    if (scale.toFixed(2) === defaultScale.toFixed(2)) {
        return (
            <button className={resetZoomClass} disabled>
                <span className='icon is-small'>
                    <i className='material-icons'>refresh</i>
                </span>
            </button>
        )
    }

    return (
        <button className={resetZoomClass} onClick={handleResetZoom}>
            <span className='icon is-small'>
                <i className='material-icons'>refresh</i>
            </span>
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
