<template>
  <div class="mon-espace">
    <div class="mon-espace-header">
      <button class="back-btn" @click="goBack">Retour</button>
      <h2>Mon espace</h2>
    </div>
    <p>Affiche les tickets/mails qui vous sont attribués (utilisateur : {{ currentUser?.username }})</p>

    <div v-if="loading" class="loading">Chargement…</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div class="debug-info" v-if="!loading">
      <small>Tickets total: {{ taches.length }} — Tickets pour vous: {{ filteredTaches.length }} — Votre id: {{ currentUser?.id }}</small>
    </div>

    <div v-if="!loading && filteredTaches.length === 0" class="no-data">Aucun ticket attribué.</div>

    <table v-if="!loading && filteredTaches.length > 0" class="tasks-table">
      <thead>
        <tr>
          <th>ID tache</th>
          <th>ID Mail</th>
          <th>Priorité</th>
          <th>Date attribution</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in filteredTaches" :key="t.id">
            <td>{{ t.id }}</td>
            <td>{{ t.mail_id }}</td>
            <td>{{ t.agent_username ?? ('#' + t.agent_user_id) }}</td>
            <td>{{ normalizePriority(t.priorite_calculee) }}</td>
            <td>{{ t.date_attribution ? new Date(t.date_attribution).toLocaleString() : '-' }}</td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useTache } from '../composables/useTache';
import { getCurrentUser } from '../utils/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const { taches, loading, error, loadTaches } = useTache();
const currentUser = ref(getCurrentUser());

onMounted(async () => {
  await loadTaches();
  // Debug: log loaded tasks and current user to help diagnose missing tickets
  // Remove or comment out these logs in production
  // eslint-disable-next-line no-console
  console.debug('MonEspace mounted - currentUser:', getCurrentUser());
  // eslint-disable-next-line no-console
  console.debug('MonEspace mounted - taches:', JSON.stringify(taches.value));
});

const filteredTaches = computed(() => {
  if (!currentUser.value) return [];
  // Use numeric comparison to avoid mismatches from string vs number coming from IPC/localStorage
  const uid = Number(currentUser.value.id);
  const username = currentUser.value.username;
  return taches.value.filter((t) => {
    const tUsername = (t as any).agent_username as string | undefined | null;
    if (tUsername) return tUsername === username;
    return Number((t as any).agent_user_id) === uid;
  });
});

function normalizePriority(p: string | null | undefined) {
  if (!p) return 'Normale';
  if (p === 'Alerte_Rouge') return 'Alerte Rouge';
  return p;
}

function goBack() {
  router.push('/');
}
</script>

<style scoped>
.mon-espace { padding: 2rem; }
.tasks-table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
.tasks-table th, .tasks-table td { border: 1px solid #e2e8f0; padding: 0.5rem; text-align: left; }
.no-data { color: #64748b; font-style: italic; }
.loading { color: #3b82f6; }
.error { color: #b91c1c; }
</style>
