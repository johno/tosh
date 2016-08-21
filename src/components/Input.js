import React from 'react'

export default ({ children, ...otherProps }) => (
  <input
    className='br bb bw2 b--black pa1'
    style={{borderLeftWidth: '1px', borderTopWidth: '1px'}}
    {...otherProps}
    children={children}
  />
)
