// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SlideOut from './components/SlideOut'
import LangDirective from './assets/lang-directive'

Vue.config.productionTip = false

Vue.use(LangDirective)
Vue.use(SlideOut)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
