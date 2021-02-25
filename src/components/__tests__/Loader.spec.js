import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Loader from '../Loader'

describe('Loader', () => {
  it('Should render correctly', () => {
    const tree = renderer.create(<Loader />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Should display the "Loading" text', () => {
    const loader = shallow(<Loader />)
    expect(loader.text()).toEqual('Loading')
  })
})
