import moment from 'moment'

const jsonString = localStorage.getItem('envelopes')
const initialState = jsonString ? JSON.parse(jsonString) : {
  items: [],
  expenses: []
}

function findExpensesFromEnvelope (expenses, envelope) {
  return expenses
    .filter((expense) => {
      const isFromEnvelope = expense.envelope === envelope.slug
      const beginOfMonth = moment().startOf('month')
      const endOfMonth = moment().endOf('month')
      const expenseDate = moment(expense.date)
      const isFromCurrentMonth = moment(expenseDate).isBetween(beginOfMonth, endOfMonth)
      return isFromEnvelope && isFromCurrentMonth
    })
}

export default {
  namespaced: true,
  state: initialState,
  getters: {
    ALL_WITH_AVAILABLE_AMOUNT (state) {
      return state.items.map((envelope) => {
        const expenses = findExpensesFromEnvelope(state.expenses, envelope)
          .map(expense => expense.value)
        const expensesSum = expenses.length === 0 ? 0 : expenses.reduce((sum, expense) => sum + expense)
        return {
          ...envelope,
          available: envelope.budget - expensesSum
        }
      })
    },
    ALL: state => state.items,
    FIND: state => slug => state.items.find(envelope => envelope.slug === slug),
    FIND_WITH_EXPENSES (state) {
      return (slug) => {
        const envelope = state.items.find(envelope => envelope.slug === slug)
        const expenses = findExpensesFromEnvelope(state.expenses, envelope)
        return {
          ...envelope,
          expenses
        }
      }
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
    },
    REMOVE_EXPENSE ({ commit }, expense) {
      commit('REMOVE_EXPENSE', expense)
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
    },
    REMOVE_EXPENSE (state, expense) {
      const index = state.expenses.findIndex(item => expense.description === item.description)
      state.expenses.splice(index, 1)
      localStorage.setItem('envelopes', JSON.stringify(state))
    }
  }
}
