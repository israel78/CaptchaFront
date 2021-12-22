import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    }
  ]
})
