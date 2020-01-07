import React from 'react'

const loader = { width: '0.5rem', height: '0.5rem', animationDuration: '0.75s' }

const loader1 = { ...loader, animationDelay: '0s' }

const loader2 = { ...loader, animationDelay: '0.25s' }

const loader3 = { ...loader, animationDelay: '0.5s' }

const Loader = () => (
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

export default Loader
