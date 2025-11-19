<template>
  <div class="kanban-board">
    <div class="kanban-top">
      <div class="priority-summary card">
        <h4>Mail par priorité</h4>
        <div class="priority-items">
          <div class="prio-item prio-red">Alerte Rouge: <strong>{{ counts['Alerte Rouge'] || 0 }}</strong></div>
          <div class="prio-item prio-orange">Urgent: <strong>{{ counts['Urgent'] || 0 }}</strong></div>
          <div class="prio-item prio-normal">Normale: <strong>{{ counts['Normale'] || 0 }}</strong></div>
        </div>
      </div>
    </div>
    <div class="kanban-column">
      <h3>En Attente</h3>
      <div class="column-list" @dragover.prevent @drop="onDrop('pending')">
        <div v-for="t in pending" :key="t.id" class="draggable" draggable="true" @dragstart="onDragStart(t, 'pending')">
          <KanbanTicketCard :ticket="t" />
        </div>
      </div>
    </div>

    <div class="kanban-column">
      <h3>En Cours</h3>
      <div class="column-list" @dragover.prevent @drop="onDrop('inprogress')">
        <div v-for="t in inprogress" :key="t.id" class="draggable" draggable="true" @dragstart="onDragStart(t, 'inprogress')">
          <KanbanTicketCard :ticket="t" />
        </div>
      </div>
    </div>

    <div class="kanban-column">
      <h3>Résolu</h3>
      <div class="column-list" @dragover.prevent @drop="onDrop('resolved')">
        <div v-for="t in resolved" :key="t.id" class="draggable" draggable="true" @dragstart="onDragStart(t, 'resolved')">
          <KanbanTicketCard :ticket="t" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import KanbanTicketCard from '../components/KanbanTicketCard.vue';
import { getCurrentUser } from '../utils/auth';

const currentUser = getCurrentUser();
const isAdmin = !!(currentUser && currentUser.role === 'admin');

const pending = ref([] as any[]);
const inprogress = ref([] as any[]);
const resolved = ref([] as any[]);
const counts = reactive<{ [k: string]: number }>({ 'Alerte Rouge': 0, 'Urgent': 0, 'Normale': 0 });
let dragged: { ticket: any, from: string } | null = null;

onMounted(async () => {
  await load();
});

async function load() {
  // Use tache API exposed by preload: admins getAll, agents getByAgent
  let tasks: any[] = [];
  try {
    if (isAdmin) {
      tasks = await window.api.tache.getAllTaches();
    } else {
      const current = getCurrentUser();
      tasks = await window.api.tache.getTachesForAgent({ agentUserId: current?.id ?? null, agentUsername: current?.username ?? null });
    }
  } catch (e) {
    console.error('Kanban: failed to load tasks', e);
    tasks = [];
  }

  // If not admin, ensure tasks are only those assigned to current user
  if (!isAdmin) {
    const current = getCurrentUser();
    tasks = tasks.filter((t:any) => Number(t.agent_user_id) === Number(current?.id));
  }

  // Partition by statut_tache (Nouveau, Assigne, Resolu)
  pending.value = tasks.filter((t:any) => (t.statut_tache || 'Nouveau') === 'Nouveau');
  inprogress.value = tasks.filter((t:any) => (t.statut_tache || 'Nouveau') === 'Assigne');
  resolved.value = tasks.filter((t:any) => (t.statut_tache || 'Nouveau') === 'Resolu');

  // Compute priority counts for the top widget
  counts['Alerte Rouge'] = tasks.filter((t:any) => (t.priorite_calculee || 'Normale') === 'Alerte Rouge').length;
  counts['Urgent'] = tasks.filter((t:any) => (t.priorite_calculee || 'Normale') === 'Urgent').length;
  counts['Normale'] = tasks.filter((t:any) => (t.priorite_calculee || 'Normale') === 'Normale').length;
}

function onDragStart(ticket: any, from: string) {
  dragged = { ticket, from };
}

async function onDrop(target: string) {
  if (!dragged) return;
  // mapping target to statut values
  const mapTarget = (s: string) => {
    if (s === 'pending') return 'Nouveau';
    if (s === 'inprogress') return 'Assigne';
    if (s === 'resolved') return 'Resolu';
    return 'Assigne';
  };

  const statut = mapTarget(target);

  try {
    // dragged.ticket is a tache (task). use tache.updateStatut
    await window.api.tache.updateStatut(dragged.ticket.id, statut);
  } catch (e) {
    console.error('Kanban: failed to update statut', e);
  }

  dragged = null;
  await load();
}
</script>

<style scoped>
.kanban-board { display:flex; gap:16px; align-items:flex-start; }
.kanban-column { flex:1 1 0; min-width:260px; }
.column-list { display:flex; flex-direction:column; gap:10px; min-height:200px; padding:8px; background:linear-gradient(#fff,#fbfdff); border-radius:8px; border:1px solid var(--color-border); }
.draggable { cursor:grab; }

.kanban-top { width:100%; margin-bottom:12px; }
.priority-summary { display:flex; align-items:center; gap:12px; padding:12px; }
.priority-items { display:flex; gap:10px; }
.prio-item { padding:6px 10px; border-radius:8px; color:white; font-weight:700; }
.prio-red { background:#ef4444; }
.prio-orange { background:#f97316; }
.prio-normal { background:#64748b; }
</style>