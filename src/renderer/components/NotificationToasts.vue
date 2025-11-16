<template>
  <div v-if="items.length > 0" class="toast-wrapper">
    <article
      v-for="item in items"
      :key="item.id"
      class="toast"
      :class="priorityClass(item.priority)"
    >
      <header class="toast-header">
        <strong>{{ item.title }}</strong>
        <button class="toast-close" @click="$emit('dismiss', item.id)" aria-label="Fermer la notification">
          ×
        </button>
      </header>
      <p class="toast-message">{{ item.message }}</p>
      <small v-if="item.meta" class="toast-meta">{{ item.meta }}</small>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { MailPriorite } from '../../shared/types/DatabaseModels';

export interface NotificationToast {
  id: string;
  title: string;
  message: string;
  meta: string | null;
  priority: MailPriorite;
}

interface Props {
  items: NotificationToast[];
}

defineProps<Props>();
defineEmits<{
  dismiss: [id: string];
}>();

const priorityClass = (priority: MailPriorite) => {
  if (priority === 'Alerte Rouge') return 'toast-critical';
  if (priority === 'Urgent') return 'toast-urgent';
  return 'toast-normal';
};
</script>

<style scoped>
.toast-wrapper {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  z-index: 9999;
}

.toast {
  min-width: 280px;
  max-width: 360px;
  padding: 1rem 1.2rem;
  border-radius: 10px;
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.2);
  background: #0f172a;
  color: #f8fafc;
  border-left: 5px solid #38bdf8;
  animation: fadeIn 0.25s ease-out;
}

.toast-critical {
  border-left-color: #ef4444;
}

.toast-urgent {
  border-left-color: #f97316;
}

.toast-normal {
  border-left-color: #38bdf8;
}

.toast-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.35rem;
  font-size: 0.95rem;
}

.toast-message {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.35;
}

.toast-meta {
  display: block;
  margin-top: 0.4rem;
  color: #cbd5f5;
  font-size: 0.8rem;
}

.toast-close {
  border: none;
  background: transparent;
  color: inherit;
  font-size: 1.1rem;
  cursor: pointer;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
