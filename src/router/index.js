import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '@/views/HeroView.vue'
import OurCoffeeView from '@/views/OurCoffeeView.vue'
import GoodsView from '@/views/GoodsView.vue'
import ContactsView from '@/views/ContactsView.vue'
import ThanksView from '@/views/ThanksView.vue'
import GoodItemView from '@/views/GoodItemView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/goods', component: GoodsView },
  { path: '/contacts', component: ContactsView },
  { path: '/thanks', component: ThanksView },
  { name: "coffee", path: '/our-coffee/:id', component: GoodItemView },
  { name: "goods", path: '/goods/:id', component: GoodItemView },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router