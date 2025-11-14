<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h2>Connexion</h2>

      <form @submit.prevent="onSubmit">
        <label>
          Nom d'utilisateur
          <input v-model="username" autocomplete="username" />
        </label>

        <label>
          Mot de passe
          <input type="password" v-model="password" autocomplete="current-password" />
        </label>

        <div class="actions">
          <button type="submit">Se connecter</button>
        </div>
      </form>

      <div class="info">
        <p v-if="noteDefault">Compte admin par défaut : <strong>admin</strong> / <strong>admin</strong></p>
        <p v-if="error" class="error">{{ error }}</p>
        <p class="hint">Compte non référencé ? Contactez l'administrateur pour créer un compte (maximum 4 comptes).</p>
        <p class="hint">Mot de passe perdu ? Contactez l'administrateur pour réinitialisation.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { seedUsersIfNeeded, validateCredentials, findUser, setCurrentUser, getUsers } from '../utils/auth';

const router = useRouter();

const username = ref('');
const password = ref('');
const error = ref('');
const noteDefault = ref(false);

onMounted(() => {
  seedUsersIfNeeded();
  // If only default admin present show a note
  const users = getUsers();
  if (users.length === 1 && users[0].username === 'admin') noteDefault.value = true;
});

async function onSubmit() {
  error.value = '';
  if (!username.value.trim() || !password.value) {
    error.value = 'Veuillez renseigner le nom d\'utilisateur et le mot de passe.';
    return;
  }

  const user = findUser(username.value.trim());
  if (!user) {
    error.value = "Compte non trouvé — contactez l'administrateur (max 4 comptes).";
    return;
  }

  if (!validateCredentials(username.value.trim(), password.value)) {
    error.value = 'Identifiants incorrects.';
    return;
  }

  // Store the full user object (including id) as current user
  setCurrentUser(user);
  // Redirect to home
  router.push('/');
}
</script>

<style scoped>
.login-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
}
.login-card {
  width: 360px;
  background: white;
  padding: 1.6rem;
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(2,6,23,0.08);
}
.login-card h2 { margin-bottom: 1rem; }
.login-card label { display: block; margin-bottom: 0.75rem; font-size: 0.95rem; }
.login-card input { width: 100%; padding: 0.5rem; border: 1px solid #e2e8f0; border-radius: 6px; }
.actions { margin-top: 1rem; text-align: right; }
.actions button { background: #2563eb; color: white; border: none; padding: 0.6rem 1rem; border-radius: 6px; cursor: pointer; }
.hint { color: #64748b; font-size: 0.85rem; margin-top: 0.6rem; }
.error { color: #b91c1c; background: #fee2e2; padding: 0.5rem; border-radius: 6px; margin-top: 0.6rem; }
</style>
