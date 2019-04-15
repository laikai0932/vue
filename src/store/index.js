import Vue from 'vue'
import Vuex from 'vuex'
import dailogStore from '@/store/dailogStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dailog: dailogStore
  }
})
