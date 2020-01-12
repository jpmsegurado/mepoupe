import Vue from 'vue'
import Vuex from 'vuex'
import EXPENSES from './expenses'
import ENVELOPES from './envelopes'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    EXPENSES,
    ENVELOPES
  }
})
