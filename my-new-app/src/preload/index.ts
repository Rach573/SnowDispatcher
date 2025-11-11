import { contextBridge } from 'electron';
import { mailServices } from './mailServices';
import { tacheServices } from './tacheServices';

/**
 * Expose une API structurée dans le contexte global du renderer. Les sous-objets
 * correspondent chacun à un domaine fonctionnel (mails, taches, etc.).
 */
contextBridge.exposeInMainWorld('api', {
  mail: mailServices,
  tache: tacheServices,
});