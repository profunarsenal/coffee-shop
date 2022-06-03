import Vue from 'vue'
import Vuex from 'vuex'

import links from '@/store/links'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links
  }
})

export default store

