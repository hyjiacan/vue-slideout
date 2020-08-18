// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import LangDirective from './assets/lang-directive'
import SlideOut from './components/index'

Vue.config.productionTip = false

Vue.use(LangDirective)
Vue.use(SlideOut, {
  size: 300,
  renderWhenVisible: true
})

Vue.prototype.$devMode = process.env.NODE_ENV === 'development'

new Vue({
  render: h => h(App)
}).$mount('#app')
