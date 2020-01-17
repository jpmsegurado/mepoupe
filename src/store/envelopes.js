export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    ALL: state => state.items
  },
  actions: {
    ADD ({ commit }, envelope) {
      commit('ADD', envelope)
    },
    REMOVE ({ commit }, envelope) {
      if (envelope.category !== 'custom') { return { error: 'operation not allowed' } }
      commit('REMOVE', envelope)
    }
  },
  mutations: {
    ADD (state, envelope) {
      state.items.push(envelope)
    },
    REMOVE (state, envelope) {
      const index = state.items.findIndex(item => envelope.label === item.label)
      state.items.splice(index, 1)
    }
  }
}
