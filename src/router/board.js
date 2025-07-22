export default [
  {
    path: '/board',
    name: 'board',
    component: () => import('../pages/board/BoardListPage.vue'),
    props: true
  },
  {
    path: '/board/:id',
    name: 'board/detail',
    component: () => import('../pages/board/BoardDetailView.vue'),
    props: true
  },
  {
    path: '/board/write',
    name: 'board/write',
    component: () => import('../pages/board/BoardWriteView.vue'),
  },
];
