import moment from 'moment'

const jsonString = localStorage.getItem('envelopes')
const initialState = jsonString ? JSON.parse(jsonString) : {
  items: [],
  expenses: []
}

export default {
  namespaced: true,
  state: initialState,
  getters: {
    ALL: (state) => {
      return state.items.map((envelope) => {
        const expenses = state.expenses
          .filter((expense) => {
            const isFromEnvelope = expense.envelope === envelope.slug
            const beginOfMonth = moment().startOf('month')
            const endOfMonth = moment().endOf('month')
            const expenseDate = moment(expense.date)
            const isFromCurrentMonth = moment(expenseDate).isBetween(beginOfMonth, endOfMonth)
            return isFromEnvelope && isFromCurrentMonth
          })
          .map(expense => expense.value)
        const expensesSum = expenses.reduce((sum, expense) => sum + expense)
        return {
          ...envelope,
          available: envelope.budget - expensesSum
        }
      })
    }
  },
  actions: {
    ADD ({ commit }, envelope) {
      commit('ADD', envelope)
    },
    REMOVE ({ commit }, envelope) {
      if (envelope.category !== 'custom') { return { error: 'operation not allowed' } }
      commit('REMOVE', envelope)
    },
    ADD_EXPENSE ({ commit }, expense) {
      commit('ADD_EXPENSE', expense)
    }
  },
  mutations: {
    ADD (state, envelope) {
      state.items.push(envelope)
      localStorage.setItem('envelopes', JSON.stringify(state))
    },
    REMOVE (state, envelope) {
      const index = state.items.findIndex(item => envelope.label === item.label)
      state.items.splice(index, 1)
      localStorage.setItem('envelopes', JSON.stringify(state))
    },
    ADD_EXPENSE (state, expense) {
      state.expenses.push(expense)
      localStorage.setItem('envelopes', JSON.stringify(state))
    }
  }
}
