import { createRouter, createMemoryHistory } from 'vue-router';

import Home from './pages/Home.vue';
import AddTaskForm from './pages/AddTaskForm.vue';
import MonEspace from './pages/MonEspace.vue';
import Admin from './pages/Admin.vue';
import Login from './pages/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add-task', component: AddTaskForm },
  { path: '/mon-espace', component: MonEspace },
  { path: '/admin', component: Admin },
  { path: '/login', component: Login }
];

export const router = createRouter({ routes, history: createMemoryHistory() });

// Simple client-side auth guard: redirect to /login when no current user
router.beforeEach((to, from, next) => {
  const publicPaths = ['/login'];
  const currentUser = localStorage.getItem('sd_currentUser');

  if (!currentUser && !publicPaths.includes(to.path)) {
    return next('/login');
  }

  const parsed = currentUser ? JSON.parse(currentUser) : null;
  if (parsed && to.path === '/login') {
    return next('/');
  }

  // Protect admin route
  if (to.path === '/admin' && (!parsed || parsed.role !== 'admin')) {
    return next('/');
  }

  return next();
});
