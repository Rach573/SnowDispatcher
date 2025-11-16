<template>
  <div class="app-frame">
    <RouterView />
    <NotificationToasts :items="notifications" @dismiss="dismissNotification" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import NotificationToasts, { type NotificationToast } from './components/NotificationToasts.vue';
import { getCurrentUser, logout } from './utils/auth';
import type { AssignmentNotification } from '../shared/types/Events';

// Ensure the current user is logged out when the window is closed or reloaded.
const handleUnload = () => {
  try {
    logout();
  } catch (e) {
    // ignore
  }
};

const notifications = ref<NotificationToast[]>([]);
const dismissTimers = new Map<string, number>();
let unsubscribeAssignments: (() => void) | null = null;

function pushNotification(payload: AssignmentNotification) {
  const id = `${payload.tacheId}-${Date.now()}`;
  const meta = payload.expediteurNom
    ? `${payload.expediteurNom}${payload.expediteurMail ? ` · ${payload.expediteurMail}` : ''}`
    : payload.expediteurMail ?? null;
  notifications.value = [
    ...notifications.value,
    {
      id,
      title: `Nouveau mail (${payload.priority})`,
      message: payload.mailObjet || `Mail #${payload.mailId}`,
      meta,
      priority: payload.priority,
    },
  ];
  const timer = window.setTimeout(() => dismissNotification(id), 8000);
  dismissTimers.set(id, timer);
}

function dismissNotification(id: string) {
  notifications.value = notifications.value.filter((toast) => toast.id !== id);
  const timer = dismissTimers.get(id);
  if (timer) {
    clearTimeout(timer);
    dismissTimers.delete(id);
  }
}

const handleAssignments = (payload: { assignments: AssignmentNotification[] }) => {
  const assignments = Array.isArray(payload?.assignments) ? payload.assignments : [];
  if (!assignments.length) return;

  const current = getCurrentUser();
  const currentId = current?.id ?? null;

  assignments.forEach((assignment) => {
    if (currentId && assignment.agentUserId === currentId) {
      pushNotification(assignment);
    }
  });
};

onMounted(() => {
  window.addEventListener('beforeunload', handleUnload);
  window.addEventListener('unload', handleUnload);
  try {
    if (window.api?.tache?.onAssigned) {
      unsubscribeAssignments = window.api.tache.onAssigned(handleAssignments);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('App.vue: unable to subscribe to assignment notifications', err);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', handleUnload);
  window.removeEventListener('unload', handleUnload);
  if (unsubscribeAssignments) {
    unsubscribeAssignments();
    unsubscribeAssignments = null;
  }
  dismissTimers.forEach((timer) => clearTimeout(timer));
  dismissTimers.clear();
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: #f8fafc;
  color: #1e293b;
}

#app {
  min-height: 100vh;
}

.app-frame {
  min-height: 100vh;
}
</style>
