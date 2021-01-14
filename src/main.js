import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
const products= "Socks"

new Vue({
  render: h => h(App),
}).$mount('#app')
