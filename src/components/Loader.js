import React from 'react'

const loader = {
  display: 'inline-block',
  verticalAlign: 'text-bottom',
  backgroundColor: 'currentColor',
  borderRadius: '50%',
  width: '0.5rem',
  height: '0.5rem',
}

const Loader = () => (
  <div className='m-4 is-flex is-flex-direction-row is-justify-content-center is-align-content-center'>
    <p className='is-size-3 is-marginless'>Loading</p>
    <div className='p-3'>
      <div style={loader} />
    </div>
    <div className='p-3'>
      <div style={loader} />
    </div>
    <div className='p-3'>
      <div style={loader} />
    </div>
  </div>
)

export default Loader
