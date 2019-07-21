import React from 'react'

const verticalAlign = 'middle'
const SvgIcon = ({style, ...props}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={'#fff'}
    style={{verticalAlign, ...style}}
    {...props}/>
)

export default SvgIcon
