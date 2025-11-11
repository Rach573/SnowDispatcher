import { ref } from 'vue';
import type { Mail } from '../../shared/types/DatabaseModels';

/**
 * Composable chargé de gérer l'état des mails dans l'interface.
 * Utilise les API exposées par le preload pour récupérer les mails non assignés.
 */
export function useMail() {
  const mails = ref<Mail[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function loadMails() {
    loading.value = true;
    error.value = null;
    try {
      // window.api.mail est injecté par le preload
      mails.value = await (window as any).api.mail.getAllMails();
    } catch (e) {
      const errMsg = e instanceof Error ? e.message : 'Erreur inconnue';
      error.value = `Erreur lors du chargement des mails : ${errMsg}`;
      mails.value = [];
    } finally {
      loading.value = false;
    }
  }

  return { mails, loading, error, loadMails };
}