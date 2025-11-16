<template>
  <div class="priority-card ticket-card card" :class="priorityClass">
    <div class="ticket-top">
      <div class="priority-badge" :title="priority">{{ priorityLabel }}</div>
      <div class="title">{{ ticket.objet }}</div>
    </div>
    <div class="ticket-meta">
      <div class="avatar" v-if="agentInitials">{{ agentInitials }}</div>
      <div class="meta-text">
        <div class="mail-from">{{ displayFrom }}</div>
        <div class="date">{{ formattedDate }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Mail } from '../../shared/types/DatabaseModels';
import { format } from 'date-fns';

const props = defineProps<{ ticket: Mail }>();

const ticket = props.ticket;

const priority = (ticket as any).priority || 'Normale';

const priorityClass = computed(() => {
  if (priority === 'Alerte Rouge') return 'prio-red';
  if (priority === 'Urgent') return 'prio-orange';
  return 'prio-normal';
});

const priorityLabel = computed(() => priority);

const agentInitials = computed(() => {
  const name = (ticket as any).agentName || (ticket as any).handler_user_name || null;
  if (!name) return null;
  const parts = name.split(' ').filter(Boolean);
  const initials = parts.map(p => p[0].toUpperCase()).slice(0,2).join('');
  return initials;
});

const displayFrom = computed(() => {
  if (ticket.expediteur && (ticket.expediteur as any).nom_complet) return (ticket.expediteur as any).nom_complet;
  if (ticket.expediteur && (ticket.expediteur as any).adresse_mail) return (ticket.expediteur as any).adresse_mail;
  return 'Expéditeur inconnu';
});

const formattedDate = computed(() => {
  try { return format(new Date(ticket.date_reception), 'Pp'); } catch (e) { return '' }
});
</script>

<style scoped>
.ticket-card { cursor: grab; }
.ticket-top { display:flex; align-items:center; gap:12px; }
.priority-badge { padding:4px 8px; border-radius:999px; font-weight:700; color:white; font-size:12px; }
.prio-red .priority-badge { background:#ef4444; }
.prio-orange .priority-badge { background:#f97316; }
.prio-normal .priority-badge { background:#64748b; }
.title { font-weight:700; color:var(--color-text); }
.ticket-meta { display:flex; gap:10px; align-items:center; margin-top:8px; }
.avatar { width:36px; height:36px; border-radius:50%; background:var(--color-primary); color:white; display:flex; align-items:center; justify-content:center; font-weight:700; }
.meta-text { font-size:13px; color:var(--color-text-muted); }
</style>