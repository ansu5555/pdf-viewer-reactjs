import React from 'react'
import { shallow } from 'enzyme'
import PreviousPageButton from '../PreviousPageButton'

describe('Previous Page Button', () => {
  const page = 10
  const css = 'custom-class'
  const mockFn = jest.fn()

  it('Should display the "Left Arrow" Icon', () => {
    const btn = shallow(
      <PreviousPageButton page={page} handlePrevClick={mockFn} />
    )
    expect(btn.text()).toEqual('keyboard_arrow_left')
  })

  it('Should have all default classes', () => {
    const btn = shallow(
      <PreviousPageButton page={page} handlePrevClick={mockFn} />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(true)
  })

  it('Should have custom class when custom class is provided', () => {
    const btn = shallow(
      <PreviousPageButton page={page} handlePrevClick={mockFn} css={css} />
    )
    expect(btn.hasClass(css)).toBe(true)
  })

  it('Should be disabled when page is equal to 1', () => {
    const btn = shallow(
      <PreviousPageButton page={1} handlePrevClick={mockFn} />
    )
    expect(btn.is('[disabled]')).toBe(true)
  })

  it('Should call the mock function on click', () => {
    const btn = shallow(
      <PreviousPageButton page={page} handlePrevClick={mockFn} />
    )
    btn.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  // negative tests
  it('Should not have default classes when custom class is provided', () => {
    const btn = shallow(
      <PreviousPageButton page={page} handlePrevClick={mockFn} css={css} />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(false)
  })

  it('Should not be disabled when page is not equal to 1', () => {
    const btn = shallow(
      <PreviousPageButton page={page} handlePrevClick={mockFn} />
    )
    expect(btn.is('[disabled]')).toBe(false)
  })
})
