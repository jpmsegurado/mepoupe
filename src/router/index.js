import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/expenses',
    name: 'expenses',
    component: () => import('../views/AddExpense')
  },
  {
    path: '/incomes',
    name: 'incomes',
    component: () => import('../views/AddIncome')
  },
  {
    path: '/envelopes',
    name: 'envelopes',
    component: () => import('../views/Envelopes')
  },
  {
    path: '/add-envelope',
    name: 'add-envelope',
    component: () => import('../views/AddEnvelope')
  },
  {
    path: '/configs',
    name: 'configs',
    component: () => import('../views/Configuration')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
