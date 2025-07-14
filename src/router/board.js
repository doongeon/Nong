export default [
  // {
  //   path: '/board',
  //   name: 'board',
  //   component: () => import('../pages/board/BoardListPage.vue'),
  // },
  {
    path: '/board/:id',
    name: 'board/detail',
    component: () => import('../pages/board/BoardDetailView.vue'),
  },
];
