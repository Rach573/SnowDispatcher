<template>
  <div class="app-container">
    <h1>SnowDispatcher amélioré</h1>

    <section class="tasks">
      <h2>Tickets en cours</h2>
      <div v-if="loadingTasks" class="loading">Chargement des tickets…</div>
      <div v-if="taskError" class="error">{{ taskError }}</div>
      <ul v-if="!loadingTasks && taches.length > 0">
        <li v-for="tache in taches" :key="tache.id">
          Ticket #{{ tache.id }} – Priorité : {{ tache.priorite_calculee }} – Statut : {{ tache.statut_tache }}
        </li>
      </ul>
      <p v-if="!loadingTasks && taches.length === 0" class="no-data">Aucun ticket.</p>
      <button @click="reloadTaches" :disabled="loadingTasks">{{ loadingTasks ? 'Chargement…' : 'Recharger les tickets' }}</button>
    </section>

    <section class="mails">
      <h2>Mails à traiter</h2>
      <div v-if="loadingMails" class="loading">Chargement des mails…</div>
      <div v-if="mailError" class="error">{{ mailError }}</div>
      <ul v-if="!loadingMails && mails.length > 0">
        <li v-for="mail in mails" :key="mail.id">
          Mail #{{ mail.id }} – Objet : {{ mail.objet }}
        </li>
      </ul>
      <p v-if="!loadingMails && mails.length === 0" class="no-data">Aucun mail à traiter.</p>
      <button @click="reloadMails" :disabled="loadingMails">{{ loadingMails ? 'Chargement…' : 'Recharger les mails' }}</button>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useMail } from './composables/useMail';
import { useTache } from './composables/useTache';

export default defineComponent({
  name: 'App',
  setup() {
    const {
      mails,
      loading: loadingMails,
      error: mailError,
      loadMails,
    } = useMail();
    const {
      taches,
      loading: loadingTasks,
      error: taskError,
      loadTaches,
    } = useTache();

    function reloadMails() {
      loadMails();
    }
    function reloadTaches() {
      loadTaches();
    }

    onMounted(() => {
      loadMails();
      loadTaches();
    });

    return {
      mails,
      loadingMails,
      mailError,
      reloadMails,
      taches,
      loadingTasks,
      taskError,
      reloadTaches,
    };
  },
});
</script>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  font-family: sans-serif;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 2rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem;
  border-left: 4px solid #42b983;
  margin-bottom: 0.5rem;
  background: #f5f5f5;
}

button {
  padding: 0.5rem 1rem;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #95a5a6;
  cursor: not-allowed;
}

.loading {
  color: #42b983;
  font-weight: bold;
}

.error {
  color: #e74c3c;
  background: #fadbd8;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.no-data {
  color: #7f8c8d;
  font-style: italic;
}
</style>