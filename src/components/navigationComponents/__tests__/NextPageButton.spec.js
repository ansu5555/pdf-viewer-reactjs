import React from 'react'
import { shallow } from 'enzyme'
import NextPageButton from '../NextPageButton'

describe('Next Page Button', () => {
  const page = 1
  const pages = 10
  const css = 'custom-class'
  const mockFn = jest.fn()

  it('Should display the "Right Arrow" Icon', () => {
    const btn = shallow(
      <NextPageButton page={page} pages={pages} handleNextClick={mockFn} />
    )
    expect(btn.text()).toEqual('keyboard_arrow_right')
  })

  it('Should have all default classes', () => {
    const btn = shallow(
      <NextPageButton page={page} pages={pages} handleNextClick={mockFn} />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(true)
  })

  it('Should have custom class when custom class is provided', () => {
    const btn = shallow(
      <NextPageButton
        page={page}
        pages={pages}
        handleNextClick={mockFn}
        css={css}
      />
    )
    expect(btn.hasClass(css)).toBe(true)
  })

  it('Should be disabled when page is equal to total page count', () => {
    const btn = shallow(
      <NextPageButton page={page} pages={page} handleNextClick={mockFn} />
    )
    expect(btn.is('[disabled]')).toBe(true)
  })

  it('Should call the mock function on click', () => {
    const btn = shallow(
      <NextPageButton page={page} pages={pages} handleNextClick={mockFn} />
    )
    btn.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })

  // negative tests
  it('Should not have default classes when custom class is provided', () => {
    const btn = shallow(
      <NextPageButton
        page={page}
        pages={pages}
        handleNextClick={mockFn}
        css={css}
      />
    )
    expect(btn.hasClass('button is-black my-0 mx-3')).toBe(false)
  })

  it('Should not be disabled when page is not equal to total page count', () => {
    const btn = shallow(
      <NextPageButton page={page} pages={pages} handleNextClick={mockFn} />
    )
    expect(btn.is('[disabled]')).toBe(false)
  })
})
