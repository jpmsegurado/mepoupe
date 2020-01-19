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
    configs,
    showMenu: false
  },
  getters: {
    ALL: state => state.configs,
    SHOW_MENU: state => state.showMenu
  },
  actions: {
    UPDATE ({ commit }, configs) {
      commit('UPDATE', configs)
    },
    TOGGLE_MENU ({ commit }) {
      commit('TOGGLE_MENU')
    }
  },
  mutations: {
    UPDATE (state, configs) {
      state.configs = configs
      localStorage.setItem('configuration', JSON.stringify(configs))
    },
    TOGGLE_MENU (state) {
      state.showMenu = !state.showMenu
    }
  }
}
