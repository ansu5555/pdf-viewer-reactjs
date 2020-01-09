import React from 'react'

const loader = {
    display: 'inline-block',
    verticalAlign: 'text-bottom',
    backgroundColor: 'currentColor',
    borderRadius: '50%',
    opacity: 0,
    width: '0.5rem',
    height: '0.5rem',
    animationDuration: '0.75s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
    animationDirection: 'normal',
    animationFillMode: 'none',
    animationPlayState: 'running',
    animationName: 'spinner-grow',
}

const loader1 = { ...loader, animationDelay: '0s' }

const loader2 = { ...loader, animationDelay: '0.25s' }

const loader3 = { ...loader, animationDelay: '0.5s' }

const Loader = () => (
    <div className='flex-row has-margin-10 justify-center align-items-flex-end'>
        <p className='is-size-3 flex-column is-marginless'>Loading</p>
        <div className='flex-column has-padding-10'>
            <div style={loader1} />
        </div>
        <div className='flex-column has-padding-10'>
            <div style={loader2} />
        </div>
        <div className='flex-column has-padding-10'>
            <div style={loader3} />
        </div>
    </div>
)

export default Loader
