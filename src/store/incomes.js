// const incomes = JSON.parse(localStorage.getItem('incomes'))

export default {
  namespaced: true,
  state: {
    items: [
      { label: 'Salário', value: 6750 }
    ]
  },
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
      localStorage.setItem('incomes', JSON.stringify(state.items))
    }
  }
}
