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

      <section class="content">
        <h3>Contenu</h3>
        <pre>{{ mail.contenu ?? '—' }}</pre>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMailDetail } from '../composables/useMailDetail';

const route = useRoute();
const router = useRouter();
const { mail, loading, error, loadMail } = useMailDetail();

const mailId = Number(route.params.id);

onMounted(() => {
  void loadMail(mailId);
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
