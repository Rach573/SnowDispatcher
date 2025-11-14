<template>
  <div class="mon-espace">
    <div class="mon-espace-header">
      <button class="back-btn" @click="goBack">Retour</button>
      <h2>Mon espace</h2>
    </div>
    <p v-if="currentUser">Tickets qui vous sont attribues ({{ currentUser?.username }})</p>
    <p v-else class="error">Aucun utilisateur connecte.</p>

    <div v-if="loading" class="loading">Chargement...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="!loading && sortedTaches.length === 0" class="no-data">Aucun ticket attribue.</div>

    <table v-if="!loading && sortedTaches.length > 0" class="tasks-table">
      <thead>
        <tr>
          <th>ID tache</th>
          <th>ID Mail</th>
          <th>Agent</th>
          <th>Priorite</th>
          <th>Date attribution</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in sortedTaches" :key="t.id">
          <td>{{ t.id }}</td>
          <td>{{ t.mail_id }}</td>
          <td>{{ t.agent_username ?? ('#' + t.agent_user_id) }}</td>
          <td>{{ normalizePriority(t.priorite_calculee) }}</td>
          <td>{{ formatDate(t.date_attribution) }}</td>
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

const priorityOrder: Record<string, number> = {
  'Alerte Rouge': 3,
  Urgent: 2,
  Normale: 1,
};

async function loadMyTaches() {
  const user = currentUser.value;
  if (!user) return;
  const id = Number(user.id);
  await loadTaches({
    agentUserId: Number.isNaN(id) ? null : id,
    agentUsername: user.username,
  });
}

onMounted(async () => {
  if (!currentUser.value) {
    router.push('/login');
    return;
  }
  await loadMyTaches();
});

const sortedTaches = computed(() => {
  return taches.value.slice().sort((a, b) => {
    const pb = priorityOrder[normalizePriority(b.priorite_calculee)] ?? 0;
    const pa = priorityOrder[normalizePriority(a.priorite_calculee)] ?? 0;
    if (pb !== pa) return pb - pa;
    const db = b.date_attribution ? new Date(b.date_attribution).getTime() : 0;
    const da = a.date_attribution ? new Date(a.date_attribution).getTime() : 0;
    return db - da;
  });
});

function normalizePriority(p: string | null | undefined) {
  if (!p) return 'Normale';
  if (p === 'Alerte_Rouge') return 'Alerte Rouge';
  return p;
}

function formatDate(dateStr: string | null | undefined) {
  if (!dateStr) return '-';
  const date = new Date(dateStr);
  return date.toLocaleString();
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
.mon-espace-header { display:flex; align-items:center; gap:1rem; margin-bottom:1rem; }
.back-btn { border:1px solid #cbd5f5; background:transparent; padding:0.4rem 0.8rem; border-radius:6px; cursor:pointer; }
</style>
