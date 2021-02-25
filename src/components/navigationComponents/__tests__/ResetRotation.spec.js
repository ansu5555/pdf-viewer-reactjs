import React from 'react'
import { shallow } from 'enzyme'
import ResetRotation from '../ResetRotation'

describe('Reset Rotation Button', () => {
  const rotationAngle = 10
  const css = 'custom-class'
  const mockFn = jest.fn()

  it('Should display the "Reset" Icon', () => {
    const btn = shallow(
      <ResetRotation
        rotationAngle={rotationAngle}
        handleResetRotation={mockFn}
      />
    )
    expect(btn.text()).toEqual('refresh')
  })

  it('Should have all default classes', () => {
    const btn = shallow(
      <ResetRotation
        rotationAngle={rotationAngle}
        handleResetRotation={mockFn}
      />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(true)
  })

  it('Should have custom class when custom class is provided', () => {
    const btn = shallow(
      <ResetRotation
        rotationAngle={rotationAngle}
        handleResetRotation={mockFn}
        css={css}
      />
    )
    expect(btn.hasClass(css)).toBe(true)
  })

  it('Should be disabled when rotationAngle is equal to 0', () => {
    const btn = shallow(
      <ResetRotation rotationAngle={0} handleResetRotation={mockFn} />
    )
    expect(btn.is('[disabled]')).toBe(true)
  })

  it('Should call the mock function on click', () => {
    const btn = shallow(
      <ResetRotation
        rotationAngle={rotationAngle}
        handleResetRotation={mockFn}
      />
    )
    btn.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  // negative tests
  it('Should not have default classes when custom class is provided', () => {
    const btn = shallow(
      <ResetRotation
        rotationAngle={rotationAngle}
        handleResetRotation={mockFn}
        css={css}
      />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(false)
  })

  it('Should not be disabled when rotationAngle is not equal to 0', () => {
    const btn = shallow(
      <ResetRotation
        rotationAngle={rotationAngle}
        handleResetRotation={mockFn}
      />
    )
    expect(btn.is('[disabled]')).toBe(false)
  })
})
