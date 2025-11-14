import { contextBridge } from 'electron';
import { mailServices } from './mailServices';
import { tacheServices } from './tacheServices';
import { authServices } from './authServices';

/**
 * Expose une API structurée dans le contexte global du renderer. Les sous-objets
 * correspondent chacun à un domaine fonctionnel (mails, taches, etc.).
 *
 * On expose via contextBridge quand disponible (contexte isolé). En environnement
 * atypique (fallback, debugging), on rattache aussi l'API sur globalThis pour
 * faciliter les tests manuels depuis la console DevTools.
 */
try {
  contextBridge.exposeInMainWorld('api', {
    mail: mailServices,
    tache: tacheServices,
    auth: authServices,
  });
  // Also add a debug log so we can confirm preload execution in DevTools
  // (this will appear in the renderer DevTools console)
  // eslint-disable-next-line no-console
  console.log('[preload] contextBridge.exposeInMainWorld -> api');
} catch (e) {
  // Fallback: attach to globalThis for environments where contextBridge isn't available
  // eslint-disable-next-line no-console
  console.warn('[preload] contextBridge not available, attaching api to globalThis', e);
  (globalThis as any).api = {
    mail: mailServices,
    tache: tacheServices,
    auth: authServices,
  };
}
