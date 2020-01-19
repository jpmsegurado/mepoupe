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
    component: () => import('../views/Expenses')
  },
  {
    path: '/add-expense',
    name: 'add-expense',
    component: () => import('../views/AddExpense')
  },
  {
    path: '/incomes',
    name: 'incomes',
    component: () => import('../views/Incomes')
  },
  {
    path: '/add-income',
    name: 'add-income',
    component: () => import('../views/AddIncome')
  },
  {
    path: '/envelopes',
    name: 'envelopes',
    component: () => import('../views/Envelopes')
  },
  {
    path: '/envelope-expenses/:slug',
    name: 'envelope-expenses',
    component: () => import('../views/EnvelopeExpenses')
  },
  {
    path: '/add-envelope',
    name: 'add-envelope',
    component: () => import('../views/AddEnvelope')
  },
  {
    path: '/add-envelope-expense/:slug?',
    name: 'add-envelope-expense',
    component: () => import('../views/AddEnvelopeExpense')
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
