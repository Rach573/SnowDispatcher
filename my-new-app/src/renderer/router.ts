import { createRouter, createMemoryHistory } from 'vue-router';

import Home from './pages/Home.vue';
import AddTaskForm from './pages/AddTaskForm.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add-task', component: AddTaskForm }
];

export const router = createRouter({ routes, history: createMemoryHistory() });
