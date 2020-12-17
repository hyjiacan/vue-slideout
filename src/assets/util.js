import languages from '@/assets/langs.json'

function getLang () {
  const langOrder = window.navigator.languages || [window.navigator.language]
  // 从浏览器读取默认的语言
  for (let i = 0; i < langOrder.length; i++) {
    let lang = langOrder[i]
    if (languages.hasOwnProperty(lang)) {
      return lang
    }
    // 找不到完全匹配的语言，使用语言系（如：zh-CN，zh 表示语言系）
    lang = lang.split('-')[0]
    if (languages.hasOwnProperty(lang)) {
      return lang
    }
  }
  // 默认设置为英文
  return 'en'
}

export default {
  getLanguage () {
    const search = window.location.search
    let customLang
    if (search.indexOf('?lang=zh') !== -1) {
      customLang = 'zh'
    } else if (search.indexOf('?lang=en') !== -1) {
      customLang = 'en'
    }

    return customLang || getLang()
  }
}
