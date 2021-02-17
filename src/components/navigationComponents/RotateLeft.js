import React from 'react'
import PropTypes from 'prop-types'

const RotateLeft = ({ css, rotationAngle, handleRotateLeft }) => {
  const rotateLeftClass =
    css || 'button is-black is-marginless has-margin-left-5 has-margin-right-5'

  if (rotationAngle === -90) {
    return (
      <button className={rotateLeftClass} disabled>
        <span className='icon is-small'>
          <i className='material-icons'>rotate_left</i>
        </span>
      </button>
    )
  }

  return (
    <button className={rotateLeftClass} onClick={handleRotateLeft}>
      <span className='icon is-small'>
        <i className='material-icons'>rotate_left</i>
      </span>
    </button>
  )
}

RotateLeft.propTypes = {
  css: PropTypes.string,
  rotationAngle: PropTypes.number.isRequired,
  handleRotateLeft: PropTypes.func.isRequired,
}

export default RotateLeft
