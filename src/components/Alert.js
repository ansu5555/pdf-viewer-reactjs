import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AlertIcon from '../../assets/alert.svg'

class Alert extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col justify-content-center vertical-align-middle'>
                    <div
                        className='alert alert-danger text-center h-auto w-75'
                        role='alert'>
                        <p className='h2'>
                            <img className='pr-5' src={AlertIcon} alt='alert' />
                            {this.props.message}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

Alert.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Alert
