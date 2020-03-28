import React from 'react'
import PropTypes from 'prop-types'

const RotateRight = ({ css, rotationAngle, handleRotateRight }) => {
    const rotateRightClass =
        css ||
        'button is-black is-marginless has-margin-left-5 has-margin-right-5'

    if (rotationAngle === 90) {
        return (
            <button className={rotateRightClass} disabled>
                <span className='icon is-small'>
                    <i className='material-icons'>rotate_right</i>
                </span>
            </button>
        )
    }

    return (
        <button className={rotateRightClass} onClick={handleRotateRight}>
            <span className='icon is-small'>
                <i className='material-icons'>rotate_right</i>
            </span>
        </button>
    )
}
RotateRight.propTypes = {
    css: PropTypes.string,
    rotationAngle: PropTypes.number.isRequired,
    handleRotateRight: PropTypes.func.isRequired,
}

export default RotateRight
