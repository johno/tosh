import React from 'react'
import defaultStyle from '../../style'

export default ({ style, ...otherProps }) => {
  const { base: { backgroundColor, borders, color } } = defaultStyle

  const windowStyle = {
    backgroundColor,
    borderStyle: borders.style,
    borderColor: borders.color,
    borderWidth: borders.widths[1],
    borderLeftWidth: borders.widths[0],
    borderTopWidth: borders.widths[0],
    color
  }

  const sx = Object.assign({}, windowStyle, style)

  return <div style={sx} {...otherProps} />
}

export const WindowHeader = ({ style, ...otherProps }) => {
  const {
    base: { padding, borders, backgroundColor, color },
    windowHeader: { background, backgroundSize, textAlign }
  } = defaultStyle

  const windowHeaderStyle = {
    background,
    backgroundSize,
    textAlign
  }

  const sx = Object.assign({}, windowHeaderStyle, style)

  return (
    <div
      style={{
        padding: padding[1],
        borderBottomColor: borders.color,
        borderBottomStyle: borders.style,
        borderBottomWidth: borders.widths[0]
      }}>
      <div style={sx}>
        <div
          style={{
            height: '100%',
            display: 'inline-block',
            paddingTop: padding[0],
            paddingLeft: padding[1],
            paddingRight: padding[1],
            paddingBottom: padding[0],
            backgroundColor,
            color
          }} {...otherProps}
        />
      </div>
    </div>
  )
}
