import Vue from 'vue'
import App from './App.vue'
import VueFlipcard from 'vue-flipcard'
import './index.css'
import './assets/tailwind.css'

Vue.component('vue-flipcard', VueFlipcard)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
