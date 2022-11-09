import Vue from 'vue'
import VueRouter from 'vue-router'
import MyFirst from '@/views/MyFirst.vue'
import MySecond from '@/views/MySecond.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'first',
    component: MyFirst
  },
  {
    path: '/second',
    name: 'second',
    component: MySecond
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
