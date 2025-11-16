import { ipcRenderer } from 'electron';
import type { Mail } from '../shared/types/DatabaseModels';

/**
 * API exposee au renderer pour interagir avec les mails.
 */
export const mailServices = {
  /**
   * Recuperer tous les mails non encore assignes.
   */
  getAllMails: async (): Promise<Mail[]> => {
    return await ipcRenderer.invoke('mails:getAll');
  },

  /**
   * Recuperer l'ensemble des mails pour les administrateurs.
   */
  getAdminMails: async (): Promise<Mail[]> => {
    return await ipcRenderer.invoke('mails:getAdminList');
  },

  /**
   * Assigner un mail a un agent (marquage cote mail uniquement). La creation d'un ticket
   * s'effectue via tacheServices.createTache().
   */
  assignMail: async (mailId: number, agentUserId: number): Promise<void> => {
    await ipcRenderer.invoke('mails:assign', mailId, agentUserId);
  },

  /**
   * Supprimer un mail.
   */
  deleteMail: async (mailId: number): Promise<void> => {
    await ipcRenderer.invoke('mails:delete', mailId);
  },

  /**
   * Reassigner un mail a un autre agent.
   */
  reassignMail: async (mailId: number, agentUserId: number): Promise<void> => {
    await ipcRenderer.invoke('mails:reassign', mailId, agentUserId);
  },

  /**
   * Récupérer un mail précis (contenu complet + expéditeur).
   */
  getMailById: async (mailId: number): Promise<Mail> => {
    return await ipcRenderer.invoke('mails:getOne', mailId);
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
