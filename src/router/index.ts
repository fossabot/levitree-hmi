import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/DashboardPage.vue')
    },
    {
      path: '/autopilot',
      name: 'Autopilot',
      component: () => import('../pages/AutopilotPage.vue')
    },
    {
      path: '/controls',
      name: 'Controls',
      component: () => import('../pages/ControlsPage.vue')
    },
    { path: '/', redirect: '/controls' }
  ]
})

export default router
