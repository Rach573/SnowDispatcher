import { ipcRenderer } from 'electron';
import type { Mail } from '../shared/types/DatabaseModels';

/**
 * API exposée au renderer pour interagir avec les mails.
 */
export const mailServices = {
  /**
   * Récupérer tous les mails non encore assignés.
   */
  getAllMails: async (): Promise<Mail[]> => {
    return await ipcRenderer.invoke('mails:getAll');
  },

  /**
   * Assigner un mail à un agent (marquage côté mail uniquement). La création d'un ticket
   * s'effectue via tacheServices.createTache().
   */
  assignMail: async (mailId: number, agentUserId: number): Promise<void> => {
    await ipcRenderer.invoke('mails:assign', mailId, agentUserId);
  },

  /**
   * Subscribe to mail updates from the main process (returns an unsubscribe function).
   * The callback receives the payload sent from main (e.g. { inserted: number }).
   */
  onUpdated: (cb: (payload: any) => void) => {
    const listener = (_ev: any, payload: any) => cb(payload);
    ipcRenderer.on('mail:updated', listener);
    return () => {
      ipcRenderer.removeListener('mail:updated', listener);
    };
  },
};

export type MailServices = typeof mailServices;