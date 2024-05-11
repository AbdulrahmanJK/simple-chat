import type { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: (): Component => import('pages/(app)/layout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: (): Component => import('pages/(app)/index.vue'),
        },
      ],
    },
  ],
});

export default router;
