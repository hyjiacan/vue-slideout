import Slideout from './slideout.js'

function setDefaultProps (customize) {
  for (let prop in customize) {
    if (!customize.hasOwnProperty(prop)) {
      continue
    }
    // Parse property name like "abc_xyz" into "abcXyz".
    prop = prop.replace(/-[a-z]/g, match => {
      return match[1].toUpperCase()
    })
    if (!Slideout.props.hasOwnProperty(prop)) {
      continue
    }
    Slideout.props[prop]['default'] = customize[prop]
  }
}

/**
 *
 * @param app
 * @param {Object} defaults The defaults value
 */
export default {
  install (app, defaults) {
    if (defaults) {
      setDefaultProps(defaults)
    }
    app.component(Slideout.name, Slideout)
  }
}
