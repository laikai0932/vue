export default{
  state: {
    show: false
  },
  mutations: {
    switch_dailog (state) {
      state.show = !state.show
    }
  },
  actions: {
    switch_dailog (context) {
      context.commit('switch_dailog')
    }
  }
}
