import React from 'react'
import defaultStyle from '../../style'

export default ({ style, ...otherProps }) => {
  const {
    base: { fontFamily },
    desktop: { background, backgroundSize }
  } = defaultStyle

  const desktopStyle = {
    background,
    backgroundSize,
    fontFamily
  }

  const sx = Object.assign({}, desktopStyle, style)

  return <div style={sx} {...otherProps} />
}
