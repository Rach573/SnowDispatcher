import { ipcRenderer } from 'electron';
import type { Tache } from '../shared/types/DatabaseModels';

/**
 * API exposee au renderer pour interagir avec les taches (tickets).
 */
export const tacheServices = {
  /**
   * Recuperer toutes les taches existantes.
   */
  getAllTaches: async (): Promise<Tache[]> => {
    return await ipcRenderer.invoke('taches:getAll');
  },

  /**
   * Recuperer les taches attribuees a un agent specifique via son id ou son username.
   */
  getTachesForAgent: async (filters: { agentUserId?: number | null; agentUsername?: string | null }): Promise<Tache[]> => {
    return await ipcRenderer.invoke('taches:getByAgent', filters);
  },

  /**
   * Creer une nouvelle tache a partir d'un mail et d'un agent.
   * Retourne l'identifiant de la tache cree.
   */
  createTache: async (mailId: number, agentUserId: number): Promise<{ id: number }> => {
    return await ipcRenderer.invoke('taches:create', mailId, agentUserId);
  },
};

export type TacheServices = typeof tacheServices;
