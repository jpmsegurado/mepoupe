export default {
  namespaced: true,
  state: {
    configs: {
      education: {
        isPercentage: true,
        value: 0.05
      },
      installments: {
        isPercentage: true,
        value: 0.1
      },
      retirement: {
        isPercentage: true,
        value: 0.3
      }
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
