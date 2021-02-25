import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Navigation from '../NavigationBar'

describe('Navigation Bar', () => {
  const mockFn = jest.fn()

  it('Should render correctly', () => {
    const tree = renderer
      .create(
        <Navigation
          page={1}
          pages={10}
          scale={1}
          defaultScale={1}
          maxScale={3}
          minScale={1}
          rotationAngle={0}
          handleNextClick={mockFn}
          handlePrevClick={mockFn}
          handleZoomIn={mockFn}
          handleResetZoom={mockFn}
          handleZoomOut={mockFn}
          handleRotateLeft={mockFn}
          handleResetRotation={mockFn}
          handleRotateRight={mockFn}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should hide control on passing props', () => {
    const loader = shallow(
      <Navigation
        page={1}
        pages={10}
        scale={1}
        defaultScale={1}
        maxScale={3}
        minScale={1}
        rotationAngle={0}
        hideZoom
        hideRotation
        handleNextClick={mockFn}
        handlePrevClick={mockFn}
        handleZoomIn={mockFn}
        handleResetZoom={mockFn}
        handleZoomOut={mockFn}
        handleRotateLeft={mockFn}
        handleResetRotation={mockFn}
        handleRotateRight={mockFn}
      />
    )
    expect(loader.text()).toEqual(
      '<PreviousPageButton /><PageIndicator /><NextPageButton />'
    )
  })
})
