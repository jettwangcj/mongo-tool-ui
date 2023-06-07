import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/commits',
    name: 'Commits',
    component: () => import('../views/Commits.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Setting.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
