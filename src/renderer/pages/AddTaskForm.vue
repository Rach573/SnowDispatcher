<template>
  <div class="container">
    <form @submit.prevent="handleAdd">
      <h2>Créer un nouveau ticket</h2>
      <input v-model="mailId" type="number" name="mailId" placeholder="ID du mail" required>
      <input v-model="agentUserId" type="number" name="agentUserId" placeholder="ID de l'agent" required>
      <button type="submit" :disabled="loading">
        {{ loading ? 'Création...' : 'Créer le ticket' }}
      </button>
      <button type="button" @click="handleCancel" class="cancel-button">Annuler</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useTache } from '../composables/useTache';
import { useRouter } from 'vue-router';
import { getCurrentUser } from '../utils/auth';

const { createTache, loading, error } = useTache();
const router = useRouter();

const mailId = ref<number>(0);
const agentUserId = ref<number>(0);
const currentUser = ref(getCurrentUser());

onMounted(() => {
  const user = currentUser.value;
  if (!user) {
    router.replace('/login');
    return;
  }
  if (user.role !== 'admin') {
    router.replace('/mon-espace');
    return;
  }
});

const handleAdd = async () => {
  try {
    await createTache(mailId.value, agentUserId.value);
    router.push('/');
  } catch (e) {
    console.error('Error creating task:', e);
  }
};

const handleCancel = () => {
  router.push('/');
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: #1e293b;
  border-radius: 0.5rem;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
  min-width: 500px;
}

h2 {
  color: #f1f5f9;
  margin-bottom: 1rem;
  text-align: center;
}

input {
  padding: 0.75rem 1rem;
  border: 2px solid #334155;
  border-radius: 8px;
  background-color: #334155;
  color: #f1f5f9;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #3b82f6;
  background-color: #1e293b;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
}

input::placeholder {
  color: #94a3b8;
}

button {
  background: #3b82f6;
  border: none;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: ease-in-out 0.2s;
}

button:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 5px 8px 20px rgba(0, 0, 0, 0.3);
}

button:disabled {
  background: #64748b;
  cursor: not-allowed;
}

.cancel-button {
  background: #64748b;
}

.cancel-button:hover {
  background: #475569;
}

.error {
  color: #ef4444;
  background: #fee2e2;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  border-left: 4px solid #ef4444;
  max-width: 500px;
}
</style>
