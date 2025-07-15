<<<<<<< HEAD
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
=======
import {createRouter, createWebHistory}  from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/board",
            name: 'board',
            component: ()=> import('@/pages/Board.vue')
        },
        {
            path: "/board/:id",
            name: 'post-detail',
            component: ()=> import('@/pages/PostDetails.vue'),
            props: true,
            // URL의 params를 컴포넌트의 props로 자동 전달
        },
    ]
})

export default router
>>>>>>> ffc77c7 (create board)
