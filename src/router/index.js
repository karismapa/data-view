import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login.vue'

import Baseline from '../views/Baseline.vue'

import Home from '../views/Home.vue'
import Data from '../views/Data.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'baseline',
    component: Baseline,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/data',
        name: 'data',
        component: Data
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
