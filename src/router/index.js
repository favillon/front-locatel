import { createRouter, createWebHistory } from 'vue-router'

import AccountLayout from '../views/Auth/AccountLayout.vue'
import DefaultLayout from '../views/DefaultLayout.vue'
import HomeView from '../views/HomeView.vue'


import { useAuthStore } from  "../stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children : [
        {
          path: '',
          name: 'home',
          component: () => HomeView
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/RegisterView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }, 
      ]
    },
    {
      path: '/account',
      component: AccountLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'account',
          component: () => import('../views/Auth/AccountView.vue')
        },
        {
          path: 'deposit',
          name: 'deposit',
          component: () => import('../views/Auth/DepositView.vue')
        },
        {
          path: 'debit',
          name: 'debit',
          component: () => import('../views/Auth/DebitView.vue')
        }
      ]
    },
  ]
})

router.beforeEach( async(to, from, next) => {
  const require = to.matched.some(url => url.meta.requiresAuth);
  if (require) {
    try {
      const storeAuth = useAuthStore()
      const { token } = storeAuth.isAuth
      if (token){
        next()
      }
    } catch (error) {
      alert('Debes autenticarte')
      next({name:'login'})
    }
  } else {
    next()
  }
})

export default router
