import Vue from 'vue'
import VueRouter from 'vue-router'

//component
import Home from '../views/Home.vue'
import createUser from '../views/createUser.vue'
import Login from '../views/Login.vue'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)
//ルート定義
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name:'createUser',
    path:'/createUser',
    component:createUser
  },
  {
    name:'Login',
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
