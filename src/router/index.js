import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)
const Dash = () => import('../pages/Dashboard.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: './dashboard',
      name: 'Dashboard',
      component: Dash
    },
    {
      path: '*',
      name: 'NotFound',
      component: PageNotFound
    }
  ]
})