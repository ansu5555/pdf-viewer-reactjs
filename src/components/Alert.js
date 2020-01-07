import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({ message }) => (
    <div className='row alert text-danger h-auto h6 m-0'>
        <div className='col-sm-2 text-right px-2'>
            <i className='material-icons'>error_outline</i>
        </div>
        <div className='col-sm-10 text-left px-0'>
            <small>{message}</small>
        </div>
    </div>
)

Alert.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Alert
