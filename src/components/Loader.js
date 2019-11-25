import React, { Component } from 'react'

class Loader extends Component {
    render() {
        const loader1 = {
            width: '0.5rem',
            height: '0.5rem',
            animationDuration: '1.5s',
            animationDelay: '0s',
        }

        const loader2 = {
            width: '0.5rem',
            height: '0.5rem',
            animationDuration: '1.5s',
            animationDelay: '0.5s',
        }

        const loader3 = {
            width: '0.5rem',
            height: '0.5rem',
            animationDuration: '1.5s',
            animationDelay: '2s',
        }

        return (
            <div className='d-flex justify-content-center vertical-align-middle text-dark'>
                <p className='h4 loader-text'>Loading</p>
                <div className='p-2'>
                    <div className='spinner-grow' style={loader1} />
                </div>
                <div className='p-2'>
                    <div className='spinner-grow' style={loader2} />
                </div>
                <div className='p-2'>
                    <div className='spinner-grow' style={loader3} />
                </div>
            </div>
        )
    }
}

export default Loader
