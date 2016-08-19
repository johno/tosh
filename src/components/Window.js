import React from 'react'

export default ({ children }) => (
  <div className='ba code bg-white'>
    <div className='bb br bw2' children={children} />
  </div>
)

export const WindowHeader = ({ children }) => (
  <div className='tc bb relative'>
    <div className='pa2 bg-white z-3'>
      {children}
    </div>
  </div>
)
