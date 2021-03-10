<template>
  <main id="app">
    <h1>
      <span>Slideout</span>
      <small v-lang>A slide-out component for Vue.js 2/3</small>
      <span id="metas">
        <span class="latest-text"/>
        <span class="loaded">
          <span>
              <a href="" id="source"/>
          </span>
          <span class="release-text"/>
          <span id="date"/>
        </span>
        <span class="pending"/>
      </span>
    </h1>
    <p class="languages">
      <span v-lang>Language:</span>
      <a class="lang" href="?lang=zh" v-if="currentLang !== 'zh'">中文</a>
      <span class="lang" v-else>中文</span>
      <a class="lang" href="?lang=en" v-if="currentLang !== 'en'">English</a>
      <span class="lang" v-else>English</span>
    </p>
    <h2 v-lang>Install</h2>
    <code>npm install @hyjiacan/vue-slideout</code>
    <p v-lang>or</p>
    <code>yarn add @hyjiacan/vue-slideout</code>
    <p v-lang>For the latest code, you can:</p>
    <code>git clone https://github.com/hyjiacan/vue-slideout.git</code>
    <p>
      <span v-lang>or</span>
      <a href="https://github.com/hyjiacan/vue-slideout/archive/master.zip" v-lang>download archive</a>
    </p>
    <h2 v-lang>Source</h2>
    <ul>
      <li><a href="https://github.com/hyjiacan/vue-slideout.git">Source code on Github</a></li>
      <li><a href="https://gitee.com/hyjiacan/vue-slideout.git">Source code on Gitee</a></li>
      <li><a href="https://github.com/hyjiacan/vue-slideout/tree/master/src/views"
             target="_blank" v-lang>Samples source code on Github</a></li>
      <li><a href="https://gitee.com/hyjiacan/vue-slideout/tree/master/src/views"
             target="_blank" v-lang>Samples source code on Gitee</a></li>
    </ul>
    <p>
      <span v-lang>There are some breaking changes at 3.0.0, see migrations on</span>
      <a style="margin-left: 10px;"
         href="https://github.com/hyjiacan/vue-slideout/blob/master/MIGRATIONS.md#upgrade-to-3x">Github</a>
      <a style="margin-left: 10px;"
         href="https://gitee.com/hyjiacan/vue-slideout/blob/master/MIGRATIONS.md#upgrade-to-3x">Gitee</a>
    </p>
    <h2 v-lang>Samples</h2>
    <p>
      <a href="https://codepen.io/hyjiacan/pen/LYRZONE" target="_blank" v-lang>Try it on the fly.</a>
    </p>
    <main-page/>
    <div id="tip" v-show="tipVisible">
      {{ tipText }}
    </div>
  </main>
</template>

<script>
import MainPage from './views/Main'
import util from '@/assets/util'

window.jsonp = function (url, callback) {
  const script = document.createElement('script')
  script.setAttribute('src', url + '?callback=' + callback)
  script.setAttribute('type', 'text/javascript')
  document.head.appendChild(script)
}

window.dateCallback = function (response) {
  const date = response.data.commit.author.date
  document.querySelector('#date').innerHTML = new Date(Date.parse(date)).toLocaleString()
  document.querySelector('#metas').classList.add('loaded')
}

window.tagsCallback = function (response) {
  const tag = response.data[0]
  const latest = {
    version: tag.name,
    tag: 'https://github.com/hyjiacan/vue-slideout/releases/tag/' + tag.name
  }
  const source = document.querySelector('#source')
  source.href = latest.tag
  source.innerHTML = latest.version

  // 加载日期
  window.jsonp(tag.commit.url, 'dateCallback')
}

export default {
  name: 'App',
  components: {
    MainPage
  },
  data () {
    return {
      tipVisible: false,
      tipText: '',
      currentLang: util.getLanguage()
    }
  },
  provide () {
    return {
      showTip: this.showTip
    }
  },
  methods: {
    showTip (tip, timeout = 3000) {
      this.tipText = tip
      this.tipVisible = true
      this.$nextTick(() => {
        setTimeout(() => {
          this.tipVisible = false
          this.tipText = ''
        }, timeout)
      })
    }
  },
  mounted () {
    const isZH = /^zh/i.test(navigator.language)
    document.body.classList.add(isZH ? 'zh' : 'en')

    if (process.env.NODE_ENV !== 'development') {
      window.jsonp('https://api.github.com/repos/hyjiacan/vue-slideout/tags', 'tagsCallback')
    }
  }
}
</script>
<style lang="less">
::-webkit-scrollbar {
  background-color: rgba(200, 200, 200, .2);
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(30, 30, 30, 0.1);
  border-radius: 4px;

  &:hover {
    background-color: rgba(30, 30, 30, 0.2);
  }
}

@media screen and (min-width: 800px) {
  #app {
    max-width: 800px;
    margin: 0 auto;
  }
}

a, a:visited, a:link, a:active {
  color: #4160aa;
  font-weight: 600;
}

a:focus, a:hover {
  color: #ff7b00;
}

h1 small {
  font-size: 16px;
  color: #666;
  font-weight: normal;
  margin-left: 20px;
}

h1 {
  padding: 10px 0;
  border-bottom: solid 3px #AAA;
}

h2 {
  padding: 6px 0;
  border-bottom: solid 2px #CCC;
}

h3 {
  padding: 3px 0;
  border-bottom: solid 1px #EEE;

  & + ul {
    border-left: 3px solid transparent;

    &:hover {
      border-color: #b3b0a9;
    }
  }
}

h1, h2, h3 {
  color: #414448;
  font-weight: normal;
}

li {
  padding: 10px 0;
}

.slideout-content {
  padding: 10px;
}

code {
  font-family: Consolas, 'Times New Roman', Times, serif;
  font-size: 13px;
  background-color: #f5f2ea;
  color: #0f5df3;
  line-height: 18px;
  box-sizing: border-box;
  margin: 0 5px;
  padding: 3px 5px;
  border-radius: 3px;
  border: none;
  display: inline;
  box-shadow: 0 0 1px 1px rgba(100, 100, 100, .1);

  &:hover {
    color: #ff9001;
  }
}

main > code {
  padding: 15px 10px;
  margin: 10px 0;
  display: block;
  border-left: 3px solid #b5bdd2;
  box-shadow: none;
  border-radius: 0;
}

.standout {
  color: #cf0a0a;
  background-color: #f8f8f8;
  padding: 10px;
  font-size: 14px;
}

@media screen and (max-width: 800px) {
  h1 small {
    display: block;
  }

  #app {
    padding: 0 5px 15px 5px;
  }
}

#tip {
  position: fixed;
  top: 5px;
  right: 5px;
  background-color: rgb(57, 137, 255);
  color: #FFF;
  box-shadow: 0 0 2px 2px rgba(100, 149, 213, 0.64);
  padding: 20px;
}

.content-loaded .mask {
  top: -100%;
  bottom: 100%;
}

#metas {
  font-size: 12px;
  padding-left: 60px;
  display: none;
  font-weight: normal;
}

#metas.loaded {
  display: inline-block;
}

#metas .loaded {
  display: none;
}

#metas.loaded .loaded {
  display: inline;
}

#metas.loaded .pending {
  display: none;
}

.zh .mask:before {
  content: '正在加载内容...';
}

.zh .latest-text:before {
  content: '最新版本:';
}

.zh .release-text:before {
  content: '发布于 ';
}

.zh .pending:before {
  content: '加载中...';
}

.en .mask:before {
  content: 'Loading content...';
}

.en .latest-text:before {
  content: 'Latest: ';
}

.en .release-text:before {
  content: ' released at ';
}

.en .pending:before {
  content: 'Loading...';
}

#source {
  margin-left: 5px;
  margin-right: 15px;
}

.languages {
  .lang {
    margin-left: 10px;
  }
}
</style>
