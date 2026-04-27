import HomePage from '@/components/HomePage.vue'
import LoginPage from '@/components/LoginPage.vue'
import UsersPage from '@/components/UsersPage.vue'

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/users',
    component: UsersPage,
  },
]
