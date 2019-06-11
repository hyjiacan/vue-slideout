import SlideOut from './Template'

function setDefaultProps (customize) {
  for (let prop in customize) {
    if (!customize.hasOwnProperty(prop)) {
      continue
    }
    // 处理带下划线格式成驼峰
    prop = prop.replace(/-[a-z]/g, match => {
      return match[1].toUpperCase()
    })
    if (!SlideOut.props.hasOwnProperty(prop)) {
      continue
    }
    SlideOut.props[prop]['default'] = customize[prop]
  }
}

/**
 *
 * @param Vue
 * @param defaults 通过 Vue.use 注册组件时，设置的组件默认值
 */
SlideOut.install = (Vue, defaults) => {
  if (defaults) {
    setDefaultProps(defaults)
  }
  Vue.component(SlideOut.name, SlideOut)
}

export default SlideOut
