<template>
  <div class="mon-espace">
    <div class="mon-espace-header">
      <button class="back-btn" @click="goBack">Retour</button>
      <h2>Mon espace</h2>
    </div>
    <p v-if="currentUser">Tickets attribués à {{ currentUser?.username }}</p>
    <p v-else class="error">Aucun utilisateur connecté.</p>

    <div v-if="currentUser" class="profile-stats">
      <section class="profile-card">
        <h3>Mon profil</h3>
        <p><strong>Identifiant :</strong> {{ currentUser.username }}</p>
        <p><strong>Rôle :</strong> {{ currentUser.role === 'admin' ? 'Administrateur' : 'Agent' }}</p>
      </section>
      <section class="stats-card">
        <h3>Statistiques personnelles</h3>
        <ul>
          <li><span>Total de tickets :</span> <strong>{{ personalStats.total }}</strong></li>
          <li><span>Priorité Alerte Rouge :</span> <strong>{{ personalStats.alerteRouge }}</strong></li>
          <li><span>Priorité Urgent :</span> <strong>{{ personalStats.urgent }}</strong></li>
          <li><span>Dernière attribution :</span> <strong>{{ personalStats.lastAssigned ?? '-' }}</strong></li>
        </ul>
      </section>
    </div>

    <section v-if="recentHistory.length > 0" class="history">
      <h3>Historique personnel</h3>
      <ul>
        <li v-for="item in recentHistory" :key="item.id">
          <span class="history-title">Ticket #{{ item.id }} · Mail #{{ item.mail_id }}</span>
          <span class="history-meta">
            {{ statutLabel(item.statut_tache) }} · {{ normalizePriority(item.priorite_calculee) }} ·
            {{ formatDate(item.date_attribution) }}
          </span>
        </li>
      </ul>
    </section>

    <section v-if="!loading && currentUser" class="status-stats">
      <div class="board-head">
        <div>
          <h3>Statistiques par statut</h3>
          <p class="board-subtitle">Répartition des tickets par état (En attente / En cours / Traité)</p>
        </div>
        <span class="chip">{{ totalTachesLabel }}</span>
      </div>

      <div class="status-cards">
        <div class="status-card card">
          <h4>En attente</h4>
          <p class="stat-count">{{ statusCounts['Nouveau'] || 0 }}</p>
        </div>
        <div class="status-card card">
          <h4>En cours</h4>
          <p class="stat-count">{{ statusCounts['Assigne'] || 0 }}</p>
        </div>
        <div class="status-card card">
          <h4>Traité</h4>
          <p class="stat-count">{{ statusCounts['Resolu'] || 0 }}</p>
        </div>
      </div>

      <div class="status-tables">
        <h4>Détails par statut</h4>
        <div class="table-wrap">
          <table class="stats-table">
            <thead>
              <tr>
                <th>Statut</th>
                <th>Nombre</th>
                <th>Dernier attribué</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>En attente</td>
                <td>{{ statusCounts['Nouveau'] || 0 }}</td>
                <td>{{ lastByStatus['Nouveau'] ?? '-' }}</td>
              </tr>
              <tr>
                <td>En cours</td>
                <td>{{ statusCounts['Assigne'] || 0 }}</td>
                <td>{{ lastByStatus['Assigne'] ?? '-' }}</td>
              </tr>
              <tr>
                <td>Traité</td>
                <td>{{ statusCounts['Resolu'] || 0 }}</td>
                <td>{{ lastByStatus['Resolu'] ?? '-' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <div v-if="loading" class="loading">Chargement...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="!loading && sortedTaches.length === 0" class="no-data">Aucun ticket attribué.</div>

    <table v-if="!loading && sortedTaches.length > 0" class="tasks-table">
      <thead>
        <tr>
          <th>ID tâche</th>
          <th>ID Mail</th>
          <th>Agent</th>
          <th>Priorité</th>
          <th>Statut</th>
          <th>Date attribution</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in sortedTaches" :key="t.id">
          <td>{{ t.id }}</td>
          <td>{{ t.mail_id }}</td>
          <td>{{ t.agent_username ?? ('#' + t.agent_user_id) }}</td>
          <td>{{ normalizePriority(t.priorite_calculee) }}</td>
          <td>{{ statutLabel(t.statut_tache) }}</td>
          <td>{{ formatDate(t.date_attribution) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useTache } from '../composables/useTache';
import { getCurrentUser } from '../utils/auth';
import type { MailStatut, Tache } from '../../shared/types/DatabaseModels';

const router = useRouter();
const { taches, loading, error, loadTaches, updateStatut: updateTacheStatut } = useTache();
const currentUser = ref(getCurrentUser());

const statutOptions: Array<{ label: string; value: MailStatut }> = [
  { label: 'Non traité', value: 'Nouveau' },
  { label: 'En cours', value: 'Assigne' },
  { label: 'Traité', value: 'Resolu' },
];
const statutLabels: Record<MailStatut, string> = statutOptions.reduce((acc, option) => {
  acc[option.value] = option.label;
  return acc;
}, {} as Record<MailStatut, string>);

const priorityDefinitions = [
  { key: 'Alerte Rouge', title: 'Alerte Rouge', description: 'Direction & top management' },
  { key: 'Urgent', title: 'Urgent', description: 'Managers de proximité' },
  { key: 'Normale', title: 'Normale', description: 'Flux standard' },
];

const statutByTache = ref<Record<number, MailStatut>>({});
const updatingStatut = ref<Record<number, boolean>>({});
const boardError = ref<string | null>(null);

const priorityOrder: Record<string, number> = {
  'Alerte Rouge': 3,
  Urgent: 2,
  Normale: 1,
};

const personalStats = computed(() => {
  const total = taches.value.length;
  const alerteRouge = taches.value.filter((t) => normalizePriority(t.priorite_calculee) === 'Alerte Rouge').length;
  const urgent = taches.value.filter((t) => normalizePriority(t.priorite_calculee) === 'Urgent').length;
  const lastTask = taches.value
    .slice()
    .sort((a, b) => getMailTimestamp(b) - getMailTimestamp(a))[0];
  return {
    total,
    alerteRouge,
    urgent,
    lastAssigned: lastTask ? formatDate(getMailDate(lastTask)) : null,
  };
});

const totalMailsLabel = computed(() => {
  const count = taches.value.length;
  return `${count} mail${count > 1 ? 's' : ''}`;
});

const prioritySections = computed(() => {
  return priorityDefinitions.map((definition) => {
    const bucket = taches.value
      .filter((t) => normalizePriority(t.priorite_calculee) === definition.key)
      .sort((a, b) => getMailTimestamp(b) - getMailTimestamp(a));
    return { ...definition, taches: bucket };
  });
});

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
    return getMailTimestamp(b) - getMailTimestamp(a);
  });
});

const totalTachesLabel = computed(() => {
  const count = taches.value.length;
  return `${count} tâche${count > 1 ? 's' : ''}`;
});

const statusCounts = computed(() => {
  const map: Record<string, number> = { Nouveau: 0, Assigne: 0, Resolu: 0 };
  for (const t of taches.value) {
    const s = t.statut_tache || 'Nouveau';
    map[s] = (map[s] || 0) + 1;
  }
  return map;
});

const lastByStatus = computed(() => {
  const map: Record<string, string | null> = { Nouveau: null, Assigne: null, Resolu: null };
  for (const s of Object.keys(map)) {
    const list = taches.value.filter((t) => (t.statut_tache || 'Nouveau') === s).sort((a, b) => getMailTimestamp(b) - getMailTimestamp(a));
    map[s] = list.length ? formatDate(getMailDate(list[0])) : null;
  }
  return map;
});

const recentHistory = computed(() => sortedTaches.value.slice(0, 5));

watch(
  () => taches.value,
  (list) => {
    const nextStatut: Record<number, MailStatut> = {};
    const nextUpdating: Record<number, boolean> = {};
    for (const task of list) {
      nextStatut[task.id] = task.statut_tache;
      nextUpdating[task.id] = false;
    }
    statutByTache.value = nextStatut;
    updatingStatut.value = nextUpdating;
  },
  { immediate: true },
);

function normalizePriority(p: string | null | undefined) {
  if (!p) return 'Normale';
  if (p === 'Alerte_Rouge') return 'Alerte Rouge';
  return p;
}

function getMailTimestamp(t: Tache): number {
  const raw = getMailDate(t);
  if (!raw) return 0;
  const timestamp = new Date(raw).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function getMailDate(t: Tache): string | null {
  return t.mail?.date_reception ?? t.date_attribution ?? null;
}

function senderName(t: Tache): string {
  return t.mail?.expediteur?.nom_complet ?? 'Expéditeur inconnu';
}

function senderEmail(t: Tache): string {
  return t.mail?.expediteur?.adresse_mail ?? 'Adresse inconnue';
}

function mailSubject(t: Tache): string {
  return t.mail?.objet ?? `Mail #${t.mail_id}`;
}

function mailSnippet(t: Tache): string {
  const content = t.mail?.contenu ?? '';
  if (!content) return 'Pas de contenu.';
  return content.length > 240 ? `${content.slice(0, 237)}...` : content;
}

function statutLabel(statut: MailStatut): string {
  return statutLabels[statut] ?? statut;
}

async function onStatutChange(tacheId: number, newStatut: MailStatut) {
  boardError.value = null;
  const previous = statutByTache.value[tacheId];
  if (!newStatut || newStatut === previous) return;

  updatingStatut.value = { ...updatingStatut.value, [tacheId]: true };
  statutByTache.value = { ...statutByTache.value, [tacheId]: newStatut };

  try {
    await updateTacheStatut(tacheId, newStatut);
    await loadMyTaches();
  } catch (e) {
    statutByTache.value = { ...statutByTache.value, [tacheId]: previous };
    boardError.value =
      e instanceof Error ? e.message : 'Impossible de mettre à jour le statut du ticket.';
  } finally {
    updatingStatut.value = { ...updatingStatut.value, [tacheId]: false };
  }
}

function formatDate(dateStr: string | null | undefined) {
  if (!dateStr) return '-';
  const date = new Date(dateStr);
  return date.toLocaleString();
}

function goBack() {
  router.push('/');
}

function openMailDetail(mailId: number) {
  if (!mailId) return;
  router.push(`/mails/${mailId}`);
}
</script>

<style scoped>
.mon-espace {
  padding: 2rem;
}

.mon-espace-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.back-btn {
  border: 1px solid #cbd5f5;
  background: transparent;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
}

.profile-stats {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.profile-card,
.stats-card {
  flex: 1;
  min-width: 260px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.05);
}

.stats-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.stats-card li {
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;
  color: #0f172a;
}

.history {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 10px rgba(15, 23, 42, 0.05);
}

.history ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.history-title {
  font-weight: 600;
  color: #0f172a;
  margin-right: 0.4rem;
}

.history-meta {
  color: #475569;
  font-size: 0.9rem;
}

.priority-board {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
}

.status-stats { margin-top: 1.5rem; margin-bottom: 1.5rem; }
.status-cards { display:flex; gap:12px; margin-bottom:12px; }
.status-card { flex:1; padding:12px; text-align:center; }
.stat-count { font-size:24px; font-weight:700; margin-top:6px; }
.stats-table { width:100%; border-collapse: collapse; }
.stats-table th, .stats-table td { padding:8px 10px; border:1px solid #e6eef6; }
.status-tables .table-wrap { margin-top:12px; }

.board-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.board-subtitle {
  margin-top: 0.25rem;
  color: #475569;
  font-size: 0.9rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  background: #e2e8f0;
  color: #0f172a;
  font-size: 0.85rem;
  font-weight: 600;
}

.priority-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.priority-column {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1rem;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.column-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
}

.column-description {
  margin: 0.2rem 0 0;
  color: #475569;
  font-size: 0.85rem;
}

.empty-column {
  text-align: center;
  padding: 1rem;
  color: #94a3b8;
  font-style: italic;
}

.priority-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-meta {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}

.sender-name {
  font-weight: 600;
  color: #0f172a;
}

.sender-email {
  font-size: 0.85rem;
  color: #475569;
}

.arrival {
  font-size: 0.85rem;
  color: #475569;
}

.mail-preview h5 {
  margin: 0;
  font-size: 1rem;
  color: #0f172a;
}

.mail-preview p {
  margin: 0.35rem 0 0;
  font-size: 0.9rem;
  color: #1f2937;
  line-height: 1.4;
}

.status-row {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.status-row select {
  border: 1px solid #cbd5f5;
  border-radius: 6px;
  padding: 0.45rem 0.6rem;
  font-size: 0.9rem;
  background: #fff;
}

.detail-link {
  margin-top: 0.5rem;
  align-self: flex-start;
  border: none;
  background: #3b82f6;
  color: #fff;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
}

.board-error {
  margin-top: 1rem;
}

.tasks-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.tasks-table th,
.tasks-table td {
  border: 1px solid #e2e8f0;
  padding: 0.5rem;
  text-align: left;
}

.no-data {
  color: #64748b;
  font-style: italic;
}

.loading {
  color: #3b82f6;
}

.error {
  color: #b91c1c;
}
</style>
