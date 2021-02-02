/**
 * This file used to provide localization support for the sample page.
 */
import languages from '@/assets/langs.json'

function getLang () {
  const langOrder = window.navigator.languages || [window.navigator.language]
  // 从浏览器读取默认的语言
  for (let i = 0; i < langOrder.length; i++) {
    let lang = langOrder[i]
    if (languages.hasOwnProperty(lang)) {
      return lang
    }
    // Try to match zh-CN en-US
    lang = lang.split('-')[0]
    if (languages.hasOwnProperty(lang)) {
      return lang
    }
  }
  // If the browser does not return the language name, use English as default.
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
