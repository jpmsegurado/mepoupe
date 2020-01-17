export default {
  namespaced: true,
  state: {
    items: [
      {
        label: 'Lazer',
        category: 'fun',
        budget: 120
      },
      {
        label: 'Alimentação',
        category: 'food',
        budget: 240
      },
      {
        label: 'Educação',
        category: 'education',
        budget: 100
      },
      {
        label: 'Parcelas',
        category: 'installment',
        budget: 100
      },
      {
        label: 'Não se meta',
        category: 'dont-mess-with',
        budget: 100
      }
    ]
  },
  getters: {
    ALL: state => state.items
  },
  actions: {
    ADD ({ commit }, envelope) {
      if (envelope.category !== 'custom') { return { error: 'operation not allowed' } }
      commit('ADD', envelope)
    }
  },
  mutations: {
    ADD (state, envelope) {
      state.items.push(envelope)
    }
  }
}
