import Vue from 'vue'
import App from './App.vue'
import DialogPlugin from './plugins/dialog'

import 'normalize.css'

Vue.config.productionTip = false

Vue.use(DialogPlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
