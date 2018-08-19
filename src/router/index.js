import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Apparel from '@/views/Apparel'
import ContactUs from '@/views/ContactUs'
import Cart from '@/views/Cart'
import LoginSignup from '@/views/LoginSignup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/apparel',
      name: 'Apparel',
      component: Apparel
    },
    {
      path: '/contact',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/login-signup',
      name: 'LoginSignup',
      component: LoginSignup
    }
  ]
})
