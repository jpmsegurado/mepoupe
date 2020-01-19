const jsonString = localStorage.getItem('incomes')
const initialState = jsonString ? JSON.parse(jsonString) : {
  items: [
    { label: 'Salário', value: 6750 }
  ]
}

export default {
  namespaced: true,
  state: initialState,
  getters: {
    ALL: state => state.items,
    SUM: state => state.items.reduce((val, item) => val + item.value, 0)
  },
  actions: {
    ADD ({ commit }, income) {
      commit('ADD', income)
    }
  },
  mutations: {
    ADD (state, income) {
      state.items.push(income)
      localStorage.setItem('incomes', JSON.stringify(state))
    }
  }
}
