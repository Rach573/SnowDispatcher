import { ipcRenderer } from 'electron';
import type { Tache } from '../shared/types/DatabaseModels';

/**
 * API exposée au renderer pour interagir avec les tâches (tickets).
 */
export const tacheServices = {
  /**
   * Récupérer toutes les tâches existantes.
   */
  getAllTaches: async (): Promise<Tache[]> => {
    return await ipcRenderer.invoke('taches:getAll');
  },

  /**
   * Créer une nouvelle tâche à partir d'un mail et d'un agent.
   * Retourne l'identifiant de la tâche créée.
   */
  createTache: async (mailId: number, agentUserId: number): Promise<{ id: number }> => {
    return await ipcRenderer.invoke('taches:create', mailId, agentUserId);
  },
};

export type TacheServices = typeof tacheServices;