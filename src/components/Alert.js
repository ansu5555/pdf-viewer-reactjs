import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ message }) => (
  <div className='columns has-text-danger mt-2 is-mobile'>
    <div className='column is-4 has-text-right p-2'>
      <span className='icon'>
        <i className='material-icons'>error_outline</i>
      </span>
    </div>
    <div className='column is-8 has-text-left p-2'>
      <small>{message}</small>
    </div>
  </div>
)

Alert.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Alert
