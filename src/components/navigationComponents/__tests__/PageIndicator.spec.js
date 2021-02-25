import React from 'react'
import { shallow } from 'enzyme'
import PageIndicator from '../PageIndicator'

describe('Page Indicator', () => {
  const page = 10
  const css = 'custom-class'

  it('Should display page details', () => {
    const indicator = shallow(<PageIndicator page={page} pages={page} />)
    expect(indicator.text()).toEqual(`Page ${page} / ${page}`)
  })

  it('Should have all default classes', () => {
    const indicator = shallow(<PageIndicator page={page} pages={page} />)
    expect(indicator.hasClass('is-size-7 has-text-centered my-0 mx-3')).toBe(
      true
    )
  })

  it('Should have custom class when custom class is provided', () => {
    const indicator = shallow(
      <PageIndicator page={page} pages={page} css={css} />
    )
    expect(indicator.hasClass(css)).toBe(true)
  })

  // negative tests
  it('Should not have default classes when custom class is provided', () => {
    const indicator = shallow(
      <PageIndicator page={page} pages={page} css={css} />
    )
    expect(indicator.hasClass('is-size-7 has-text-centered my-0 mx-3')).toBe(
      false
    )
  })
})
