import Vue from 'vue'
import ElementUI from 'element-ui'
import money from 'v-money'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/fonts/element-icons.ttf'
import 'element-ui/lib/theme-chalk/fonts/element-icons.woff'

import FormItem from '@/components/form-item/FormItem'

Vue.use(ElementUI)
Vue.use(money, {
  decimal: ',',
  thousands: '.',
  prefix: 'R$ ',
  suffix: '',
  precision: 2,
  masked: false
})

Vue.component(FormItem.name, FormItem)
Vue.prototype.$formatMoney = (money) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(money)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
