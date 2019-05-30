// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import LangDirective from './assets/lang-directive'

Vue.config.productionTip = false

Vue.use(LangDirective)

new Vue({
  render: h => h(App)
}).$mount('#app')
