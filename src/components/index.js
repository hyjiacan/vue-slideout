import Slideout from './Template'

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
 * @param Vue
 * @param {Object} defaults The defaults value
 */
Slideout.install = (Vue, defaults) => {
  if (defaults) {
    setDefaultProps(defaults)
  }
  Vue.component(Slideout.name, Slideout)
}

export default Slideout
