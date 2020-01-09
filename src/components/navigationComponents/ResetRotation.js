import React from 'react'
import PropTypes from 'prop-types'

const ResetRotation = ({ css, rotationAngle, handleResetRotation }) => {
    const resetRotationClass = css || 'button is-black'

    if (rotationAngle === 0) {
        return (
            <button className={resetRotationClass} disabled>
                <i className='material-icons'>refresh</i>
            </button>
        )
    }

    return (
        <button className={resetRotationClass} onClick={handleResetRotation}>
            <i className='material-icons'>refresh</i>
        </button>
    )
}
ResetRotation.propTypes = {
    css: PropTypes.string,
    rotationAngle: PropTypes.number.isRequired,
    handleResetRotation: PropTypes.func.isRequired,
}

export default ResetRotation
