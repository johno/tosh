import React from 'react'
import defaultStyle from '../../style'

export default ({ style, ...otherProps }) => {
  const { base: { borders, color, fontFamily, padding } } = defaultStyle

  const inputStyle = {
    borderStyle: borders.style,
    borderColor: borders.color,
    borderWidth: borders.widths[1],
    borderLeftWidth: borders.widths[0],
    borderTopWidth: borders.widths[0],
    color,
    fontFamily,
    padding
  }

  const sx = Object.assign({}, inputStyle, style)

  return (
    <input
      style={sx}
      {...otherProps}
    />
  )
}
