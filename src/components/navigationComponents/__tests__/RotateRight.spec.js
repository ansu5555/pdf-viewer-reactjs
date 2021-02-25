import React from 'react'
import { shallow } from 'enzyme'
import RotateRight from '../RotateRight'

describe('Rotate Left  Button', () => {
  const rotationAngle = 10
  const css = 'custom-class'
  const mockFn = jest.fn()

  it('Should display the "Rotate Right" Icon', () => {
    const btn = shallow(
      <RotateRight rotationAngle={rotationAngle} handleRotateRight={mockFn} />
    )
    expect(btn.text()).toEqual('rotate_right')
  })

  it('Should have all default classes', () => {
    const btn = shallow(
      <RotateRight rotationAngle={rotationAngle} handleRotateRight={mockFn} />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(true)
  })

  it('Should have custom class when custom class is provided', () => {
    const btn = shallow(
      <RotateRight
        rotationAngle={rotationAngle}
        handleRotateRight={mockFn}
        css={css}
      />
    )
    expect(btn.hasClass(css)).toBe(true)
  })

  it('Should be disabled when rotationAngle is equal to 90', () => {
    const btn = shallow(
      <RotateRight rotationAngle={90} handleRotateRight={mockFn} />
    )
    expect(btn.is('[disabled]')).toBe(true)
  })

  it('Should call the mock function on click', () => {
    const btn = shallow(
      <RotateRight rotationAngle={rotationAngle} handleRotateRight={mockFn} />
    )
    btn.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  // negative tests
  it('Should not have default classes when custom class is provided', () => {
    const btn = shallow(
      <RotateRight
        rotationAngle={rotationAngle}
        handleRotateRight={mockFn}
        css={css}
      />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(false)
  })

  it('Should not be disabled when rotationAngle is not equal to 90', () => {
    const btn = shallow(
      <RotateRight rotationAngle={rotationAngle} handleRotateRight={mockFn} />
    )
    expect(btn.is('[disabled]')).toBe(false)
  })
})
