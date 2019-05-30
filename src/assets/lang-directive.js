import languages from './langs.json'

const langOrder = window.navigator.languages

function getLang () {
  // 从浏览器读取默认的语言
  for (let i = 0; i < langOrder.length; i++) {
    let lang = langOrder[i]
    if (languages.hasOwnProperty(lang)) {
      return lang
    }
  }
  // 找不到完全匹配的语言，打语言系（如：zh-CN，zh 表示语言系）
  for (let i = 0; i < langOrder.length; i++) {
    let lang = langOrder[i].split('-')[0]
    if (languages.hasOwnProperty(lang)) {
      return lang
    }
  }
  // 默认设置为英文
  return 'en'
}

let langId = getLang()

const directive = {
  inserted: el => {
    // value 是 langId
    const define = languages[langId]
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
