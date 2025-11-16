<template>
  <div class="kanban-board">
    <div class="kanban-column" v-if="isAdmin">
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
import { ref, onMounted } from 'vue';
import KanbanTicketCard from '../components/KanbanTicketCard.vue';
import { getCurrentUser } from '../utils/auth';

const currentUser = getCurrentUser();
const isAdmin = !!(currentUser && currentUser.role === 'admin');

const pending = ref([] as any[]);
const inprogress = ref([] as any[]);
const resolved = ref([] as any[]);
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

  // Partition by statut_tache (Nouveau, Assigne, Resolu)
  pending.value = tasks.filter((t:any) => (t.statut_tache || 'Nouveau') === 'Nouveau');
  inprogress.value = tasks.filter((t:any) => (t.statut_tache || 'Nouveau') === 'Assigne');
  resolved.value = tasks.filter((t:any) => (t.statut_tache || 'Nouveau') === 'Resolu');
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
</style>