import Vue from 'vue'
import Vuex from 'vuex'

import links from '@/store/links'
import bestsellers from '@/store/bestsellers'
import coffees from '@/store/coffees'
import goods from '@/store/goods'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links,
    bestsellers,
    coffees,
    goods
  }
})

export default store

