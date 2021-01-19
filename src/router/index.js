import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [{
      path: '/',
      component: () => import('@/views/home/index')
    }, {
      path: 'album',
      component: () => import('@/views/album/index')
    }, {
      path: 'mood',
      component: () => import('@/views/mood/index')
    }, {
      path: 'picture',
      component: () => import('@/views/picture/index')
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
