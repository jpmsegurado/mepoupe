import Vue from 'vue'
import ElementUI from 'element-ui'
import money from 'v-money'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/pt-br'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/fonts/element-icons.ttf'
import 'element-ui/lib/theme-chalk/fonts/element-icons.woff'

import FormItem from '@/components/form-item/FormItem'

locale.use(lang)

Vue.use(ElementUI)
Vue.use(money, {
  decimal: ',',
  thousands: '.',
  prefix: 'R$ ',
  suffix: '',
  precision: 2
})

Vue.component(FormItem.name, FormItem)

Vue.prototype.$formatMoney = (money) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(money)
}

Vue.prototype.$currencyToNumber = (currency) => {
  const removedSymbol = currency.replace('R$ ', '')
  const removedCommas = removedSymbol.split('.').join('')
  const removeDotForComma = removedCommas.replace(',', '.')
  return parseFloat(removeDotForComma)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
