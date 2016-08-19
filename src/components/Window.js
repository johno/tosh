import React from 'react'

export default ({ children }) => (
  <div className='ba bg-white'>
    <div className='bb br bw2' children={children} />
  </div>
)

export const WindowHeader = ({ children }) => (
  <div className='bb pa2'>
    <div className='tc' style={{background: 'linear-gradient(to bottom, #222, #222 50%, #fff 50%, #fff', backgroundSize: '.25rem .25rem'}}>
      <div className='h-100 ph2 dib bg-white'>
        {children}
      </div>
    </div>
  </div>
)
