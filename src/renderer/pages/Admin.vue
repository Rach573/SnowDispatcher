<template>
  <div class="admin-page">
    <h2>Administration des comptes</h2>

    <section class="create">
      <h3>Créer un compte</h3>
      <div class="form-row">
        <input v-model="newUsername" placeholder="Nom d'utilisateur" />
        <input v-model="newPassword" placeholder="Mot de passe" />
        <button @click="handleCreate" :disabled="creating">Créer</button>
      </div>
      <div v-if="createError" class="error">{{ createError }}</div>
    </section>

    <section class="list">
      <h3>Comptes existants (max {{ maxSlots }})</h3>
      <table>
        <thead>
          <tr><th>ID</th><th>Nom</th><th>Rôle</th><th>Actions</th></tr>
        </thead>
        <tbody>
          <tr v-for="u in users" :key="u.username">
            <td>{{ u.id }}</td>
            <td>{{ u.username }}</td>
            <td>{{ u.role }}</td>
            <td>
              <button @click="promptReset(u.username)">Réinitialiser mot de passe</button>
              <button @click="handleDelete(u.username)" :disabled="u.username === current?.username">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getUsers, createUserWithCredentials, deleteUser, resetPassword, getCurrentUser } from '../utils/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const users = ref(getUsers());
const newUsername = ref('');
const newPassword = ref('');
const createError = ref('');
const creating = ref(false);
const maxSlots = 4;
const current = ref(getCurrentUser());

function refresh() { users.value = getUsers(); }

onMounted(() => {
  refresh();
  if (!current.value || current.value.role !== 'admin') {
    router.push('/');
  }
});

async function handleCreate() {
  createError.value = '';
  if (!newUsername.value.trim() || !newPassword.value) {
    createError.value = 'Remplissez nom d\'utilisateur et mot de passe.';
    return;
  }
  creating.value = true;
  const ok = createUserWithCredentials(newUsername.value.trim(), newPassword.value, 'user');
  if (!ok) {
    createError.value = 'Impossible de créer : nom existant ou limite atteinte.';
  } else {
    newUsername.value = '';
    newPassword.value = '';
    refresh();
  }
  creating.value = false;
}

function handleDelete(username: string) {
  if (username === current.value?.username) return;
  if (!confirm(`Supprimer le compte ${username} ?`)) return;
  deleteUser(username);
  refresh();
}

function promptReset(username: string) {
  const np = prompt(`Nouveau mot de passe pour ${username} :`, 'changeme');
  if (!np) return;
  resetPassword(username, np);
  alert('Mot de passe réinitialisé.');
}
</script>

<style scoped>
.admin-page { padding: 2rem; }
.form-row { display:flex; gap:0.5rem; align-items:center; }
input { padding:0.4rem; }
table { width:100%; border-collapse:collapse; margin-top:1rem; }
th,td{ border:1px solid #e2e8f0; padding:0.4rem; }
.error { color:#b91c1c; }
</style>
