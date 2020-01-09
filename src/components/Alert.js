import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ message }) => (
    <div className='columns has-text-danger has-margin-top-5'>
        <div className='column is-4 has-text-right has-padding-5'>
            <i className='material-icons'>error_outline</i>
        </div>
        <div className='column is-8 has-text-left has-padding-5'>
            <small>{message}</small>
        </div>
    </div>
)

Alert.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Alert
