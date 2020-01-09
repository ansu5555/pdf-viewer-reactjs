import React from 'react'
import PropTypes from 'prop-types'

const RotateRight = ({ css, rotationAngle, handleRotateRight }) => {
    const rotateRightClass = css || 'button is-black'

    if (rotationAngle === 90) {
        return (
            <button className={rotateRightClass} disabled>
                <i className='material-icons'>rotate_right</i>
            </button>
        )
    }

    return (
        <button className={rotateRightClass} onClick={handleRotateRight}>
            <i className='material-icons'>rotate_right</i>
        </button>
    )
}
RotateRight.propTypes = {
    css: PropTypes.string,
    rotationAngle: PropTypes.number.isRequired,
    handleRotateRight: PropTypes.func.isRequired,
}

export default RotateRight
