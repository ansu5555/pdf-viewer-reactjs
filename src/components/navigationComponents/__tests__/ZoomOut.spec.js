import React from 'react'
import { shallow } from 'enzyme'
import ZoomOut from '../ZoomOut'

describe('Zoom Out Button', () => {
  const scale = 5
  const minScale = 1
  const css = 'custom-class'
  const mockFn = jest.fn()

  it('Should display the "Zoom Out" Icon', () => {
    const btn = shallow(
      <ZoomOut
        scale={scale}
        defaultScale={scale}
        minScale={minScale}
        handleZoomOut={mockFn}
      />
    )
    expect(btn.text()).toEqual('zoom_out')
  })

  it('Should have all default classes', () => {
    const btn = shallow(
      <ZoomOut
        scale={scale}
        defaultScale={scale}
        minScale={minScale}
        handleZoomOut={mockFn}
      />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(true)
  })

  it('Should have custom class when custom class is provided', () => {
    const btn = shallow(
      <ZoomOut
        scale={scale}
        defaultScale={scale}
        minScale={minScale}
        handleZoomOut={mockFn}
        css={css}
      />
    )
    expect(btn.hasClass(css)).toBe(true)
  })

  it('Should be disabled when scale is equal to MinScale', () => {
    const btn = shallow(
      <ZoomOut
        scale={minScale}
        defaultScale={scale}
        minScale={minScale}
        handleZoomOut={mockFn}
      />
    )
    expect(btn.is('[disabled]')).toBe(true)
  })

  it('Should be disabled when scale is equal to DefaultScale and DefaultScale is less than MinScale', () => {
    const btn = shallow(
      <ZoomOut
        scale={0.5}
        defaultScale={0.5}
        minScale={minScale}
        handleZoomOut={mockFn}
      />
    )
    expect(btn.is('[disabled]')).toBe(true)
  })

  it('Should call the mock function on click', () => {
    const btn = shallow(
      <ZoomOut
        scale={scale}
        defaultScale={scale}
        minScale={minScale}
        handleZoomOut={mockFn}
      />
    )
    btn.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  // negative tests
  it('Should not have default classes when custom class is provided', () => {
    const btn = shallow(
      <ZoomOut
        scale={scale}
        defaultScale={scale}
        minScale={minScale}
        handleZoomOut={mockFn}
        css={css}
      />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(false)
  })

  it('Should not be disabled when scale is not equal to minScale', () => {
    const btn = shallow(
      <ZoomOut
        scale={scale}
        defaultScale={scale}
        minScale={minScale}
        handleZoomOut={mockFn}
      />
    )
    expect(btn.is('[disabled]')).toBe(false)
  })
})
