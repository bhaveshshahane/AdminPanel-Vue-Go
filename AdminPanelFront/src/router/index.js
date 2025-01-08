import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/auth/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sign-up',
      component: SignUp,
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../components/auth/SignIn.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../components/dashboard/DashBoard.vue'),
    },
  ],
})

export default router
