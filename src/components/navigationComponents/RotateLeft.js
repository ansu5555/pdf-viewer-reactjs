import React from 'react'
import PropTypes from 'prop-types'

const RotateLeft = ({ css, rotationAngle, handleRotateLeft }) => {
    const rotateLeftClass = css || 'button is-black'

    if (rotationAngle === -90) {
        return (
            <button className={rotateLeftClass} disabled>
                <i className='material-icons'>rotate_left</i>
            </button>
        )
    }

    return (
        <button className={rotateLeftClass} onClick={handleRotateLeft}>
            <i className='material-icons'>rotate_left</i>
        </button>
    )
}

RotateLeft.propTypes = {
    css: PropTypes.string,
    rotationAngle: PropTypes.number.isRequired,
    handleRotateLeft: PropTypes.func.isRequired,
}

export default RotateLeft
