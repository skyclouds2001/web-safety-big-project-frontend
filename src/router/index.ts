import { createRouter, createWebHistory } from 'vue-router'
import Storage from '@/util/Storage'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: async () => await import('@/views/LoginPage.vue'),
    },
    {
      path: '/register',
      component: async () => await import('@/views/RegisterPage.vue'),
    },
    {
      path: '/',
      component: async () => await import('@/views/BasePage.vue'),
      redirect: '/login',
      children: [
        {
          path: '/scenery-spot',
          component: async () => await import('@/views/ScenerySpotManage.vue'),
        },
        {
          path: '/ticket',
          component: async () => await import('@/views/TicketManage.vue'),
        },
        {
          path: '/order',
          component: async () => await import('@/views/OrderManage.vue'),
        },
        {
          path: '/user',
          component: async () => await import('@/views/UserManage.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (['/login', '/register'].includes(to.fullPath) || Storage.get('token') != null) {
    next()
  } else {
    next('/')
  }
})

export default router
