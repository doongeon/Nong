import { createRouter, createWebHistory } from 'vue-router';

import boardRoutes from './board';

import HomePage from '../pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/auth/LoginView.vue'),
    },
    ...boardRoutes,
  ],
});

export default router;
