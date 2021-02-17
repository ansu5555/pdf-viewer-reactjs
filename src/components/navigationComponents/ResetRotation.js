import React from 'react'
import PropTypes from 'prop-types'

const ResetRotation = ({ css, rotationAngle, handleResetRotation }) => {
  const resetRotationClass =
    css || 'button is-black is-marginless has-margin-left-5 has-margin-right-5'

  if (rotationAngle === 0) {
    return (
      <button className={resetRotationClass} disabled>
        <span className='icon is-small'>
          <i className='material-icons'>refresh</i>
        </span>
      </button>
    )
  }

  return (
    <button className={resetRotationClass} onClick={handleResetRotation}>
      <span className='icon is-small'>
        <i className='material-icons'>refresh</i>
      </span>
    </button>
  )
}
ResetRotation.propTypes = {
  css: PropTypes.string,
  rotationAngle: PropTypes.number.isRequired,
  handleResetRotation: PropTypes.func.isRequired,
}

export default ResetRotation
