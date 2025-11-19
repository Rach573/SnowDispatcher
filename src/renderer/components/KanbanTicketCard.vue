<template>
  <div class="priority-card ticket-card card" :class="priorityClass" @click="openMail">
    <div class="ticket-top">
      <div class="priority-badge" :title="priority">{{ priorityLabel }}</div>
      <div class="title">{{ mailTitle }}</div>
    </div>
    <div class="ticket-meta">
      <div class="avatar" v-if="agentInitials">{{ agentInitials }}</div>
      <div class="meta-text">
        <div class="mail-from" v-if="displayFrom">{{ displayFrom }}</div>
        <div class="date">{{ formattedDate }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import type { Mail } from '../../shared/types/DatabaseModels';
import { format } from 'date-fns';

const props = defineProps<{ ticket: Mail }>();

const ticket = props.ticket;

const mail = (ticket as any).mail ?? (ticket as any);
const priority = (ticket as any).priority || mail?.priorite_calculee || 'Normale';

const priorityClass = computed(() => {
  if (priority === 'Alerte Rouge') return 'prio-red';
  if (priority === 'Urgent') return 'prio-orange';
  return 'prio-normal';
});

const priorityLabel = computed(() => priority);

const agentInitials = computed(() => {
  const name = (ticket as any).agentName || (ticket as any).handler_user_name || (ticket as any).agent_username || null;
  if (!name) return null;
  const parts = String(name).split(' ').filter(Boolean) as string[];
  const initials = parts.map((p: string) => p[0].toUpperCase()).slice(0,2).join('');
  return initials;
});

const displayFrom = computed(() => {
  // ticket may be a tache with embedded mail
  const mail = (ticket as any).mail ?? ticket;
  if (!mail) return '';
  if (mail.expediteur && (mail.expediteur as any).nom_complet) return (mail.expediteur as any).nom_complet;
  if (mail.expediteur && (mail.expediteur as any).adresse_mail) return (mail.expediteur as any).adresse_mail;
  return '';
});

const router = useRouter();

function openMail() {
  const mail = (ticket as any).mail ?? (ticket as any);
  const mailId = mail?.id ?? mail?.mail_id ?? null;
  if (!mailId) return;
  router.push(`/mails/${mailId}`);
}

const mailTitle = computed(() => mail?.objet ?? '');

const formattedDate = computed(() => {
  try { return format(new Date(mail?.date_reception ?? (ticket as any).date_reception), 'Pp'); } catch (e) { return '' }
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