<template>
  <div class="app-shell">
    <aside class="app-sidebar">
      <div class="logo" aria-hidden>
        <strong class="logo-brand">Snow</strong>Dispatcher
      </div>
      <nav class="side-nav">
        <ul>
          <li>
            <RouterLink to="/">Tableau de bord</RouterLink>
          </li>
          <li v-if="isAdmin">
            <RouterLink to="/admin">Supervision</RouterLink>
          </li>
          <li v-else>
            <RouterLink to="/mon-espace">Statistiques</RouterLink>
          </li>
        </ul>
      </nav>
    </aside>

    <header class="app-header">
      <div class="header-left">
        <h1 style="font-size:16px; color:var(--color-text);">SnowDispatcher</h1>
      </div>
      <div class="header-right">
        <span class="user-name">{{ getUserName }}</span>
        <button class="btn secondary" @click="handleLogout">Se déconnecter</button>
      </div>
    </header>

    <main class="app-main">
      <RouterView />
    </main>

    <!-- Debug: bouton de test visible pour l'admin (permet de simuler une notification entrante) -->
    <button v-if="isAdmin" class="debug-notif" @click="emitTestNotification">Test notif</button>
    <NotificationToasts :items="notifications" @dismiss="dismissNotification" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import NotificationToasts, { type NotificationToast } from './components/NotificationToasts.vue';
import { getCurrentUser, logout } from './utils/auth';
import type { AssignmentNotification } from '../shared/types/Events';
import type { Mail } from '../shared/types/DatabaseModels';

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
const isAdmin = (() => getCurrentUser()?.role === 'admin')();

const getUserName = computed(() => {
  const u = getCurrentUser();
  return u?.username ?? '';
});

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

function derivePriorityFromStaffStatus(status: string | null | undefined) {
  if (!status) return 'Normale';
  if (status === 'Leader') return 'Alerte Rouge';
  if (status === 'N' || status === 'N+1') return 'Urgent';
  return 'Normale';
}

function pushMailNotification(mail: Mail) {
  const id = `mail-${mail.id}-${Date.now()}`;
  const meta = mail.expediteur?.nom_complet
    ? `${mail.expediteur.nom_complet}${mail.expediteur.adresse_mail ? ` · ${mail.expediteur.adresse_mail}` : ''}`
    : mail.expediteur?.adresse_mail ?? null;
  const priority = derivePriorityFromStaffStatus((mail.expediteur as any)?.statut_hierarchique ?? null) as any;
  notifications.value = [
    ...notifications.value,
    {
      id,
      title: `Nouveau mail (${priority})`,
      message: mail.objet || `Mail #${mail.id}`,
      meta,
      priority,
    },
  ];
  const timer = window.setTimeout(() => dismissNotification(id), 8000);
  dismissTimers.set(id, timer);
}

function emitTestNotification() {
  const sample: Mail = {
    id: -1,
    objet: 'Test notification manuelle',
    contenu: 'Contenu de test',
    date_reception: new Date().toISOString(),
    expediteur_staff_id: null,
    categorie_id: null,
    privacy_id: null,
    handler_user_id: getCurrentUser()?.id ?? null,
  } as Mail;
  pushMailNotification(sample);
  // also log for debugging
  // eslint-disable-next-line no-console
  console.log('emitTestNotification: pushed sample mail notification', sample);
}

function handleLogout() {
  try {
    logout();
  } catch (e) {
    // ignore
  }
  // refresh to ensure UI resets
  window.location.reload();
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
    if (window.api?.mail?.onIncoming) {
      window.api.mail.onIncoming((payload: any) => {
        try {
          const mail = payload?.mail as Mail | undefined;
          if (!mail) return;
          const current = getCurrentUser();
          const currentId = current?.id ?? null;
          const isAdmin = current?.role === 'admin';
          if (isAdmin) {
            pushMailNotification(mail);
            return;
          }
          if (currentId && mail.handler_user_id === currentId) {
            pushMailNotification(mail);
          }
        } catch (e) {
          // ignore
        }
      });
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

.app-shell { min-height: 100vh; }

.app-sidebar .logo {
  font-size: 18px;
  margin-bottom: 18px;
}
.side-nav ul { list-style: none; }
.side-nav li { margin: 10px 0; }
.side-nav a { color: var(--color-text); text-decoration: none; }

.app-header { height: 60px; display:flex; align-items:center; justify-content:space-between; padding: 0 16px; }
.header-right { display:flex; gap:12px; align-items:center; }
.user-name { color: var(--color-text-muted); font-size: 14px; }

/* Debug test button style (visible only for admin via v-if) */
.debug-notif {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 10001;
  background: linear-gradient(180deg,#0ea5e9,#0369a1);
  color: white;
  border: none;
  padding: 0.45rem 0.9rem;
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(2,6,23,0.25);
  cursor: pointer;
  font-weight: 600;
}
.debug-notif:hover {
  transform: translateY(-1px);
}
</style>
