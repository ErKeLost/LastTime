import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false
axios.defaults.baseURL = 'http://123.207.32.32:8000'


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
