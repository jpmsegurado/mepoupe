import Vue from 'vue'
import Vuex from 'vuex'
import CONFIGURATION from './configuration'
import EXPENSES from './expenses'
import ENVELOPES from './envelopes'
import INCOMES from './incomes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    EXPENSES,
    ENVELOPES,
    INCOMES,
    CONFIGURATION
  }
})
