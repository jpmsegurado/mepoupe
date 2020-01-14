const json = localStorage.getItem('configuration')
const configs = json ? JSON.parse(json) : {
  education: 0.05,
  installments: 0.1,
  retirement: 0.3,
  dontMess: 0.1
}

export default {
  namespaced: true,
  state: {
    configs
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
      localStorage.setItem('configuration', JSON.stringify(configs))
    }
  }
}
