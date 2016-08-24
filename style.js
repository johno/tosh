const fontFamily = 'Silom, monospace'

const color = '#222'
const backgroundColor = '#fff'

const desktop = {
  background: `linear-gradient(
    to right top,
    ${backgroundColor} 33%,
    ${color} 33%,
    ${color} 66%,
    ${backgroundColor} 66%
  )`,
  backgroundSize: '3px 3px'
}

const windowHeader = {
  background: `linear-gradient(
    to bottom,
    ${color},
    ${color} 50%,
    ${backgroundColor} 50%,
    ${backgroundColor}
  )`,
  backgroundSize: '.25rem .25rem',
  textAlign: 'center'
}

const padding = ['.25rem', '.5rem']

const borders = {
  widths: ['1px', '.25rem'],
  style: 'solid',
  color
}

const style = {
  base: {
    backgroundColor, borders, color,
    fontFamily, padding
  },
  desktop,
  windowHeader
}

module.exports = style
