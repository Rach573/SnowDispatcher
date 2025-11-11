import { ref } from 'vue';
import type { Tache } from '../../shared/types/DatabaseModels';

/**
 * Composable chargé de la gestion des tâches (tickets) côté UI.
 * Il s'appuie sur l'API tache exposée par le preload.
 */
export function useTache() {
  const taches = ref<Tache[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function loadTaches() {
    loading.value = true;
    error.value = null;
    try {
      taches.value = await (window as any).api.tache.getAllTaches();
    } catch (e) {
      const errMsg = e instanceof Error ? e.message : 'Erreur inconnue';
      error.value = `Erreur lors du chargement des tâches : ${errMsg}`;
      taches.value = [];
    } finally {
      loading.value = false;
    }
  }

  async function createTache(mailId: number, agentUserId: number) {
    loading.value = true;
    error.value = null;
    try {
      const result = await (window as any).api.tache.createTache(mailId, agentUserId);
      // Recharge la liste après création
      await loadTaches();
      return result;
    } catch (e) {
      const errMsg = e instanceof Error ? e.message : 'Erreur inconnue';
      error.value = `Erreur lors de la création de la tâche : ${errMsg}`;
      throw e;
    } finally {
      loading.value = false;
    }
  }

  return { taches, loading, error, loadTaches, createTache };
}