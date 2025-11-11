import { ref } from 'vue';
import type { Mail } from '../../shared/types/DatabaseModels';

/**
 * Composable responsible for managing mail state in the UI.
 * Uses the API exposed by the preload to retrieve unassigned mails.
 */
export function useMail() {
  const mails = ref<Mail[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function loadMails() {
    loading.value = true;
    error.value = null;
    try {
      // window.api.mail is injected by the preload
      mails.value = await window.api.mail.getAllMails();
    } catch (e) {
      const errMsg = e instanceof Error ? e.message : 'Unknown error';
      error.value = `Error loading mails: ${errMsg}`;
      mails.value = [];
    } finally {
      loading.value = false;
    }
  }

  return { mails, loading, error, loadMails };
}
