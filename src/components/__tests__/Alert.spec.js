import React from 'react'
import { shallow } from 'enzyme'
import Alert from '../Alert'

describe('Alert', () => {
  const errMsg = 'error msg for alert'

  it('Should display the Error Message', () => {
    const alert = shallow(<Alert message={errMsg} />)
    expect(alert.text()).toEqual(`error_outline${errMsg}`)
  })
})
