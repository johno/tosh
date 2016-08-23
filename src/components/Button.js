import React from 'react'

export default ({ children, style = {} }) => {
  return (
    <button
      className='bg-white br3 ba b--black ph4 pv1'
      children={children}
    />
  )
}
