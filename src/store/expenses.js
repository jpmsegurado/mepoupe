const jsonString = localStorage.getItem('expenses')
const initialState = jsonString ? JSON.parse(jsonString) : {
  items: []
}

export default {
  namespaced: true,
  state: initialState,
  getters: {
    ALL: state => state.items,
    SUM: state => state.items.reduce((val, item) => val + item.value, 0)
  },
  actions: {
    ADD ({ commit }, expense) {
      commit('ADD', expense)
    },
    REMOVE ({ commit }, expense) {
      commit('REMOVE', expense)
    }
  },
  mutations: {
    ADD (state, expense) {
      state.items.push(expense)
      localStorage.setItem('expenses', JSON.stringify(state))
    },
    REMOVE (state, expense) {
      const index = state.items.findIndex(item => expense.label === item.label)
      state.items.splice(index, index)
      localStorage.setItem('expenses', JSON.stringify(state))
    }
  }
}
