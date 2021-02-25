import React from 'react'
import { shallow } from 'enzyme'
import ResetZoom from '../ResetZoom'

describe('Reset Zoom Button', () => {
  const scale = 10
  const defaultScale = 5
  const css = 'custom-class'
  const mockFn = jest.fn()

  it('Should display the "Reset" Icon', () => {
    const btn = shallow(
      <ResetZoom
        scale={scale}
        defaultScale={defaultScale}
        handleResetZoom={mockFn}
      />
    )
    expect(btn.text()).toEqual('refresh')
  })

  it('Should have all default classes', () => {
    const btn = shallow(
      <ResetZoom
        scale={scale}
        defaultScale={defaultScale}
        handleResetZoom={mockFn}
      />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(true)
  })

  it('Should have custom class when custom class is provided', () => {
    const btn = shallow(
      <ResetZoom
        scale={scale}
        defaultScale={defaultScale}
        handleResetZoom={mockFn}
        css={css}
      />
    )
    expect(btn.hasClass(css)).toBe(true)
  })

  it('Should be disabled when scale is equal to DefaultScale', () => {
    const btn = shallow(
      <ResetZoom
        scale={defaultScale}
        defaultScale={defaultScale}
        handleResetZoom={mockFn}
      />
    )
    expect(btn.is('[disabled]')).toBe(true)
  })

  it('Should call the mock function on click', () => {
    const btn = shallow(
      <ResetZoom
        scale={scale}
        defaultScale={defaultScale}
        handleResetZoom={mockFn}
      />
    )
    btn.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  // negative tests
  it('Should not have default classes when custom class is provided', () => {
    const btn = shallow(
      <ResetZoom
        scale={scale}
        defaultScale={defaultScale}
        handleResetZoom={mockFn}
        css={css}
      />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(false)
  })

  it('Should not be disabled when scale is not equal to 0', () => {
    const btn = shallow(
      <ResetZoom
        scale={scale}
        defaultScale={defaultScale}
        handleResetZoom={mockFn}
      />
    )
    expect(btn.is('[disabled]')).toBe(false)
  })
})
