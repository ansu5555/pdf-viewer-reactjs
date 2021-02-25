import React from 'react'
import { shallow } from 'enzyme'
import ZoomIn from '../ZoomIn'

describe('Zoom In Button', () => {
  const scale = 5
  const maxScale = 10
  const css = 'custom-class'
  const mockFn = jest.fn()

  it('Should display the "Zoom In" Icon', () => {
    const btn = shallow(
      <ZoomIn
        scale={scale}
        defaultScale={scale}
        maxScale={maxScale}
        handleZoomIn={mockFn}
      />
    )
    expect(btn.text()).toEqual('zoom_in')
  })

  it('Should have all default classes', () => {
    const btn = shallow(
      <ZoomIn
        scale={scale}
        defaultScale={scale}
        maxScale={maxScale}
        handleZoomIn={mockFn}
      />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(true)
  })

  it('Should have custom class when custom class is provided', () => {
    const btn = shallow(
      <ZoomIn
        scale={scale}
        defaultScale={scale}
        maxScale={maxScale}
        handleZoomIn={mockFn}
        css={css}
      />
    )
    expect(btn.hasClass(css)).toBe(true)
  })

  it('Should be disabled when scale is equal to MaxScale', () => {
    const btn = shallow(
      <ZoomIn
        scale={maxScale}
        defaultScale={scale}
        maxScale={maxScale}
        handleZoomIn={mockFn}
      />
    )
    expect(btn.is('[disabled]')).toBe(true)
  })

  it('Should be disabled when scale is equal to DefaultScale and DefaultScale is greater than MaxScale', () => {
    const btn = shallow(
      <ZoomIn
        scale={15}
        defaultScale={15}
        maxScale={maxScale}
        handleZoomIn={mockFn}
      />
    )
    expect(btn.is('[disabled]')).toBe(true)
  })

  it('Should call the mock function on click', () => {
    const btn = shallow(
      <ZoomIn
        scale={scale}
        defaultScale={scale}
        maxScale={maxScale}
        handleZoomIn={mockFn}
      />
    )
    btn.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  // negative tests
  it('Should not have default classes when custom class is provided', () => {
    const btn = shallow(
      <ZoomIn
        scale={scale}
        defaultScale={scale}
        maxScale={maxScale}
        handleZoomIn={mockFn}
        css={css}
      />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(false)
  })

  it('Should not be disabled when scale is not equal to MaxScale', () => {
    const btn = shallow(
      <ZoomIn
        scale={scale}
        defaultScale={scale}
        maxScale={maxScale}
        handleZoomIn={mockFn}
      />
    )
    expect(btn.is('[disabled]')).toBe(false)
  })
})
