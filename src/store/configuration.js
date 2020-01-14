export default {
  namespaced: true,
  state: {
    configs: {
      education: 0.05,
      installments: 0.1,
      retirement: 0.3
    }
  },
  getters: {
    ALL: state => state.configs
  },
  actions: {
    UPDATE ({ commit }, configs) {
      commit('UPDATE', configs)
    }
  },
  mutations: {
    UPDATE (state, configs) {
      state.configs = configs
    }
  }
}
