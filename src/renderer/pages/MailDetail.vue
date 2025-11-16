<template>
  <div class="mail-detail">
    <header class="detail-header">
      <button class="back-btn" @click="goBack">← Retour</button>
      <div class="header-text">
        <h2>{{ mail?.objet ?? 'Mail' }}</h2>
        <p v-if="mail">{{ formatDate(mail.date_reception) }}</p>
      </div>
    </header>

    <div v-if="loading" class="state">Chargement du mail…</div>
    <div v-else-if="error" class="state error">{{ error }}</div>
    <div v-else-if="mail" class="mail-card">
      <section class="meta">
        <div>
          <span class="meta-label">Expéditeur</span>
          <p class="meta-value">
            {{ mail.expediteur?.nom_complet ?? 'Inconnu' }}
            <span v-if="mail.expediteur?.adresse_mail" class="mail-address">({{ mail.expediteur?.adresse_mail }})</span>
          </p>
        </div>
        <div>
          <span class="meta-label">Date de réception</span>
          <p class="meta-value">{{ formatDate(mail.date_reception) }}</p>
        </div>
      </section>

      <div class="actions">
        <button v-if="canResolve" class="btn primary" @click="markResolved" :disabled="resolving">
          ✅ Marquer comme Résolu
        </button>
      </div>

      <section class="content">
        <h3>Contenu</h3>
        <pre>{{ mail.contenu ?? '—' }}</pre>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMailDetail } from '../composables/useMailDetail';
import { getCurrentUser } from '../utils/auth';

const route = useRoute();
const router = useRouter();
const { mail, loading, error, loadMail } = useMailDetail();

const mailId = Number(route.params.id);

onMounted(() => {
  void loadMail(mailId).then(() => {
    void findRelatedTache();
  });
});

const goBack = () => {
  if (router.options.history.state.back) {
    router.back();
  } else {
    router.push('/mon-espace');
  }
};

const formatDate = (dateStr: string | null | undefined) => {
  if (!dateStr) return '-';
  return new Date(dateStr).toLocaleString();
};

const canResolve = ref(false);
const resolving = ref(false);
let relatedTacheId: number | null = null;

async function findRelatedTache() {
  try {
    if (!mail.value) return;
    const current = getCurrentUser();
    let taches: any[] = [];
    if (current?.role === 'admin') {
      taches = await window.api.tache.getAllTaches();
    } else {
      taches = await window.api.tache.getTachesForAgent({ agentUserId: current?.id ?? null, agentUsername: current?.username ?? null });
    }

    const found = taches.find((t: any) => Number(t.mail_id) === Number(mail.value?.id));
    if (found) {
      relatedTacheId = found.id;
      canResolve.value = (found.statut_tache !== 'Resolu');
    } else {
      relatedTacheId = null;
      canResolve.value = false;
    }
  } catch (e) {
    // ignore
    canResolve.value = false;
    relatedTacheId = null;
  }
}

async function markResolved() {
  if (!relatedTacheId) return;
  resolving.value = true;
  try {
    await window.api.tache.updateStatut(relatedTacheId, 'Resolu');
    // navigate back to kanban (dashboard)
    router.push('/');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Failed to mark resolved', e);
  } finally {
    resolving.value = false;
  }
}
</script>

<style scoped>
.mail-detail {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.detail-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.back-btn {
  border: 1px solid #cbd5f5;
  background: transparent;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
}

.header-text h2 {
  margin: 0;
  font-size: 1.8rem;
  color: #0f172a;
}

.header-text p {
  margin: 0.2rem 0 0;
  color: #475569;
}

.mail-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.meta-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #94a3b8;
}

.meta-value {
  margin: 0.2rem 0 0;
  font-size: 1rem;
  color: #0f172a;
}

.mail-address {
  color: #64748b;
  font-size: 0.9rem;
}

.content h3 {
  margin-bottom: 0.5rem;
  color: #0f172a;
}

.content pre {
  white-space: pre-wrap;
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  max-height: 60vh;
  overflow: auto;
}

.state {
  padding: 1rem;
  text-align: center;
  color: #475569;
}

.state.error {
  color: #b91c1c;
}
</style>
