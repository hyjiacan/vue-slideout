import languages from './langs.json'
import util from '@/assets/util'

const directive = {
  mounted: el => {
    // value: langId
    const define = languages[util.getLanguage()]
    if (!define) {
      // The language is not supported.
      return
    }
    let text = el.innerHTML
    text = text.replace(/<(\w+).+?>(.+?)<\/\1>/g, (match, tag, content) => `<${tag}>${content}</${tag}>`)
    text = text.replace(/[\r\n\s]+/g, ' ').replace(/^\s*|\s*$/g, '')
    if (!define.hasOwnProperty(text)) {
      return
    }
    el.innerHTML = define[text]
  }
}

export default directive
