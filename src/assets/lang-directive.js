import languages from './langs.json'
import util from '@/assets/util'

const directive = {
  inserted: el => {
    // value 是 langId
    const define = languages[util.getLanguage()]
    if (!define) {
      // 不支持此语言，啥也不做
      return
    }
    let text = el.innerHTML
    // 处理vue在子元素标签上生成的 v-data 属性
    text = text.replace(/<(\w+).+?>(.+?)<\/\1>/g, (match, tag, content) => `<${tag}>${content}</${tag}>`)
    // 如果多余的换行或空格
    text = text.replace(/[\r\n\s]+/g, ' ').replace(/^\s*|\s*$/g, '')
    if (!define.hasOwnProperty(text)) {
      // 没有这项的其它语言，啥也不做
      return
    }
    el.innerHTML = define[text]
  }
}

export default {
  install (Vue) {
    Vue.directive('lang', directive)
  }
}
