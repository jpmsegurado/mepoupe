export default {
  namespaced: true,
  state: {
    items: [
      {
        label: 'Lazer',
        category: 'fun',
        value: 120
      },
      {
        label: 'Alimentação',
        category: 'food',
        value: 240
      },
      {
        label: 'Educação',
        category: 'education',
        value: 100
      },
      {
        label: 'Parcelas',
        category: 'installment',
        value: 100
      },
      {
        label: 'Não se meta',
        category: 'dont-mess-with',
        value: 100
      }
    ]
  },
  getters: {
    ALL: state => state.items
  },
  actions: {},
  mutations: {}
}
