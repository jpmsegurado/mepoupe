const jsonString = localStorage.getItem('expenses')
const initialState = jsonString ? JSON.parse(jsonString) : {
  items: [
    { label: 'Aluguel', value: 900 },
    { label: 'Condomínio', value: 300 },
    { label: 'Energia', value: 150 },
    { label: 'Internet', value: 150 },
    { label: 'Psicologa', value: 400 },
    { label: 'Jiu Jitsu', value: 230 },
    { label: 'CEI', value: 100 },
    { label: 'DAS MEI', value: 55 },
    { label: 'Beleza', value: 120 },
    { label: 'Alimentação', value: 400 },
    { label: 'Compras de casa', value: 200 },
    { label: 'Spotify', value: 20 },
    { label: 'Amazon Prime', value: 10 },
    { label: 'Uber Camila FDS', value: 225 },
    { label: 'Transporte CEI/Jiu Jitsu', value: 584 },
    { label: 'Diarista', value: 240 },
    { label: 'Gatos', value: 100 },
    { label: 'Plano Celular', value: 50 }
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
