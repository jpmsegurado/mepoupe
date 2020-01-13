// const expenses = JSON.parse(localStorage.getItem('expenses'))

export default {
  namespaced: true,
  state: {
    items: [
      { label: 'Aluguel', value: 900 },
      { label: 'Condomínio', value: 300 },
      { label: 'Energia', value: 150 },
      { label: 'Internet', value: 150 },
      { label: 'Psicologa', value: 400 },
      { label: 'Jiu Jitsu', value: 230 },
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
      localStorage.setItem('expenses', JSON.stringify(state.items))
    }
  }
}
