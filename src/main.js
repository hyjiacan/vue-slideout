import { createApp } from 'vue'
import App from './App'
import LangDirective from './assets/lang-directive'
import Slideout from './components/index'

const app = createApp(App)

app.directive('lang', LangDirective)
app.use(Slideout, {
  size: 300,
  renderWhenVisible: true
})

app.mount('#app')
