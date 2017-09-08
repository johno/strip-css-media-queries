'use strict'

module.exports = css => {
  if (typeof css !== 'string') {
    throw new TypeError('strip-css-media-queries expected a string')
  }

  return css.replace(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+[^\}]+\}/ig, '')
}
