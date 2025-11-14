import { ref } from 'vue';
import type { Mail } from '../../shared/types/DatabaseModels';

/**
 * Composable pour la gestion administrative des mails.
 */
export function useAdminMail() {
  const mails = ref<Mail[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function loadAllMails() {
    loading.value = true;
    error.value = null;
    try {
      mails.value = await window.api.mail.getAdminMails();
    } catch (e) {
      const errMsg = e instanceof Error ? e.message : 'Unknown error';
      error.value = `Impossible de charger les mails: ${errMsg}`;
      mails.value = [];
    } finally {
      loading.value = false;
    }
  }

  async function deleteMail(mailId: number) {
    try {
      await window.api.mail.deleteMail(mailId);
      await loadAllMails();
    } finally {
    }
  }

  async function reassignMail(mailId: number, agentUserId: number) {
    try {
      await window.api.mail.reassignMail(mailId, agentUserId);
      await loadAllMails();
    } finally {
    }
  }

  return {
    mails,
    loading,
    error,
    loadAllMails,
    deleteMail,
    reassignMail,
  };
}
