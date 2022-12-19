import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: async () => await import('@/views/BasePage.vue'),
      children: [
        {
          path: '/login',
          component: async () => await import('@/views/LoginPage.vue'),
        },
        {
          path: '/register',
          component: async () => await import('@/views/RegisterPage.vue'),
        },
        {
          path: 'scenery-spot',
          component: async () => await import('@/views/ScenerySpotManage.vue'),
        },
        {
          path: 'ticket',
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
