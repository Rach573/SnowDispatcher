<template>
  <div class="admin-page">
    <div class="admin-header">
      <button class="back-btn" @click="goBack">Retour</button>
      <h2>Administration des comptes</h2>
    </div>

    <section class="create">
      <h3>Creer un compte</h3>
      <div class="form-row">
        <input v-model="newUsername" placeholder="Nom d'utilisateur" />
        <input v-model="newPassword" placeholder="Mot de passe" type="password" />
        <button @click="handleCreate" :disabled="creating">Creer</button>
      </div>
      <div v-if="createError" class="error">{{ createError }}</div>
    </section>

    <section class="list">
      <h3>Comptes existants (max {{ maxSlots }})</h3>
      <table>
        <thead>
          <tr><th>ID</th><th>Nom</th><th>Role</th><th>Actions</th></tr>
        </thead>
        <tbody>
          <tr v-for="u in users" :key="u.username">
            <td>{{ u.id }}</td>
            <td>{{ u.username }}</td>
            <td>{{ u.role }}</td>
            <td>
              <button @click="promptReset(u.username)">Reinitialiser mot de passe</button>
              <button @click="handleDelete(u.username)" :disabled="u.username === currentUser?.username">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mail-admin">
      <div class="mail-admin-header">
        <h3>Gestion des mails</h3>
        <button @click="loadAdminMails" :disabled="mailLoading">Rafraichir</button>
      </div>
      <div v-if="mailLoading" class="loading">Chargement des mails...</div>
      <div v-if="mailError" class="error">{{ mailError }}</div>
      <table v-if="!mailLoading && adminMails.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Objet</th>
            <th>Agent</th>
            <th>Date reception</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="mail in adminMails" :key="mail.id">
            <td>{{ mail.id }}</td>
            <td>{{ mail.objet }}</td>
            <td>{{ mail.handler_username ?? (mail.handler_user_id ? ('#' + mail.handler_user_id) : 'Non assigne') }}</td>
            <td>{{ formatMailDate(mail.date_reception) }}</td>
            <td>
              <div class="mail-actions">
                <button class="danger" @click="confirmDeleteMail(mail.id)" :disabled="mailLoading">Supprimer</button>
                <div class="reassign">
                  <input type="number" min="1" v-model.number="reassignTargets[mail.id]" placeholder="Agent ID" />
                  <button @click="submitReassign(mail.id)" :disabled="mailLoading">Reassigner</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-if="!mailLoading && adminMails.length === 0" class="no-data">Aucun mail enregistre.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchUsers, createUserWithCredentials, deleteUser, resetPassword, getCurrentUser } from '../utils/auth';
import { useRouter } from 'vue-router';
import { useAdminMail } from '../composables/useAdminMail';
import type { AuthUser } from '../../shared/types/Auth';

const router = useRouter();
const users = ref<AuthUser[]>([]);
const newUsername = ref('');
const newPassword = ref('');
const createError = ref('');
const creating = ref(false);
const maxSlots = 4;
const currentUser = ref(getCurrentUser());

const {
  mails: adminMails,
  loading: mailLoading,
  error: mailError,
  loadAllMails,
  deleteMail: deleteMailRecord,
  reassignMail,
} = useAdminMail();

const reassignTargets = ref<Record<number, number | null>>({});

async function refreshAccounts() {
  try {
    users.value = await fetchUsers();
  } catch (e) {
    createError.value = e instanceof Error ? e.message : 'Erreur de chargement des comptes.';
  }
}

onMounted(async () => {
  if (!currentUser.value || currentUser.value.role !== 'admin') {
    router.push('/');
    return;
  }
  await refreshAccounts();
  await loadAllMails();
});

async function handleCreate() {
  createError.value = '';
  if (!newUsername.value.trim() || !newPassword.value) {
    createError.value = 'Remplissez nom utilisateur et mot de passe.';
    return;
  }
  creating.value = true;
  try {
    await createUserWithCredentials(newUsername.value.trim(), newPassword.value, 'agent');
    newUsername.value = '';
    newPassword.value = '';
    await refreshAccounts();
  } catch (e) {
    createError.value = e instanceof Error ? e.message : 'Impossible de creer le compte.';
  } finally {
    creating.value = false;
  }
}

async function handleDelete(username: string) {
  if (username === currentUser.value?.username) return;
  if (!confirm(`Supprimer le compte ${username} ?`)) return;
  try {
    await deleteUser(username);
    await refreshAccounts();
  } catch (e) {
    alert(e instanceof Error ? e.message : 'Erreur lors de la suppression.');
  }
}

async function promptReset(username: string) {
  const np = prompt(`Nouveau mot de passe pour ${username} :`, 'changeme');
  if (!np) return;
  try {
    await resetPassword(username, np);
    alert('Mot de passe reinitialise.');
  } catch (e) {
    alert(e instanceof Error ? e.message : 'Erreur lors de la reinitialisation.');
  }
}

function formatMailDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleString();
}

async function loadAdminMails() {
  await loadAllMails();
}

async function confirmDeleteMail(mailId: number) {
  if (!confirm(`Supprimer le mail ${mailId} ?`)) return;
  await deleteMailRecord(mailId);
}

async function submitReassign(mailId: number) {
  const target = reassignTargets.value[mailId];
  if (typeof target !== 'number' || Number.isNaN(target) || target <= 0) {
    alert('Entrez un identifiant agent valide.');
    return;
  }
  await reassignMail(mailId, target);
  reassignTargets.value[mailId] = null;
}
</script>

<style scoped>
.admin-page { padding: 2rem; }
.admin-header { display:flex; align-items:center; gap:1rem; margin-bottom:1rem; }
.back-btn { border:1px solid #cbd5f5; background:transparent; padding:0.4rem 0.8rem; border-radius:6px; cursor:pointer; }
.form-row { display:flex; gap:0.5rem; align-items:center; }
input { padding:0.4rem; }
table { width:100%; border-collapse:collapse; margin-top:1rem; }
th,td{ border:1px solid #e2e8f0; padding:0.4rem; }
.error { color:#b91c1c; margin-top:0.5rem; }
.mail-admin { margin-top:2rem; }
.mail-admin-header { display:flex; justify-content:space-between; align-items:center; }
.mail-actions { display:flex; flex-direction:column; gap:0.5rem; }
.mail-actions .reassign { display:flex; gap:0.5rem; align-items:center; }
.mail-actions input { width:120px; }
.danger { background:#ef4444; color:#fff; border:none; padding:0.3rem 0.6rem; border-radius:4px; cursor:pointer; }
.loading { color:#3b82f6; margin-top:0.5rem; }
.no-data { color:#64748b; font-style:italic; margin-top:0.5rem; }
button[disabled] { opacity:0.6; cursor:not-allowed; }
</style>
function goBack() {
  router.push('/');
}
