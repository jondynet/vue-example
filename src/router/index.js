import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

var routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(`@/pages/auth/login`)
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import(`@/pages/auth/logout`)
  },
  {
    path: '/admin',
    component: () => import(`@/components/AdminLayout`),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import(`@/pages/dashboard/index`)
      },
      {
        path: 'jsonserver/table',
        name: 'JsonServer',
        component: () => import(`@/pages/jsonserver/table`)
      },
      {
        path: 'jsonserver/add',
        name: 'JsonServerAdd',
        component: () => import(`@/pages/jsonserver/add`)
      },
      {
        path: '*',
        name: 'NotFound',
        component: () => import(`@/components/NotFound`)
      }
    ]
  }
]

export default new Router({
  routes
})
