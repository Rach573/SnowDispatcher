import { ipcRenderer } from 'electron';
import type { Tache, MailStatut } from '../shared/types/DatabaseModels';
import type { AssignmentEventPayload } from '../shared/types/Events';

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

  /**
   * Mettre �� jour le statut d'une tache existante.
   */
  updateStatut: async (tacheId: number, statut: MailStatut): Promise<void> => {
    return await ipcRenderer.invoke('taches:updateStatut', tacheId, statut);
  },

  /**
   * Ecouter les notifications d'assignation envoyées par le processus main.
   */
  onAssigned: (cb: (payload: AssignmentEventPayload) => void) => {
    const listener = (_event: Electron.IpcRendererEvent, payload: AssignmentEventPayload) => cb(payload);
    ipcRenderer.on('tache:assigned', listener);
    return () => {
      ipcRenderer.removeListener('tache:assigned', listener);
    };
  },
};

export type TacheServices = typeof tacheServices;
