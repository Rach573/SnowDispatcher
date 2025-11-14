import { ref } from 'vue';
import type { Tache } from '../../shared/types/DatabaseModels';

/**
 * Composable responsible for managing tasks/tickets in the UI.
 * Uses the tache API exposed by the preload.
 */
export function useTache() {
  const taches = ref<Tache[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  async function loadTaches() {
    loading.value = true;
    error.value = null;
    try {
      taches.value = await window.api.tache.getAllTaches();
    } catch (e) {
      const errMsg = e instanceof Error ? e.message : 'Unknown error';
      error.value = `Error loading tasks: ${errMsg}`;
      taches.value = [];
    } finally {
      loading.value = false;
    }
  }

  async function createTache(mailId: number, agentUserId: number) {
    loading.value = true;
    error.value = null;
    try {
      const result = await window.api.tache.createTache(mailId, agentUserId);
      // Reload list after creation
      await loadTaches();
      return result;
    } catch (e) {
      const errMsg = e instanceof Error ? e.message : 'Unknown error';
      error.value = `Error creating task: ${errMsg}`;
      throw e;
    } finally {
      loading.value = false;
    }
  }

  return { taches, loading, error, loadTaches, createTache };
}
