import React from 'react'
import SvgIcon from './SvgIcon'


const styles = {
  transform: 'rotate(180deg)'
}
const Prev = props => (
    <SvgIcon {...props}>
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/><path d="M0 0h24v24H0z" fill="none"/>
    </SvgIcon>
  )


export default Prev
