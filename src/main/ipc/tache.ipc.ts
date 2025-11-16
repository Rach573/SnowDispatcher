import { ipcMain } from 'electron';
import { TacheService } from '../services/TacheService';
import { ensureAdmin, ensureAuthenticated } from '../utils/session';
import type { MailStatut } from '../../shared/types/DatabaseModels';

/**
 * Registers IPC channels related to tasks/tickets.
 */
export function registerTacheHandlers(): void {
  const service = new TacheService();

  ipcMain.handle('taches:getAll', async (event) => {
    ensureAdmin(event.sender);
    return await service.getAll();
  });

  ipcMain.handle('taches:getByAgent', async (event, filters: { agentUserId?: number | null; agentUsername?: string | null }) => {
    const current = ensureAuthenticated(event.sender);
    if (current.role === 'admin') {
      return await service.getByAgent(filters);
    }
    return await service.getByAgent({
      agentUserId: current.id,
      agentUsername: current.username,
    });
  });

  ipcMain.handle('taches:create', async (event, mailId: number, agentUserId: number) => {
    ensureAdmin(event.sender);
    return await service.createTache(mailId, agentUserId);
  });

  ipcMain.handle('taches:updateStatut', async (event, tacheId: number, statut: MailStatut) => {
    const actor = ensureAuthenticated(event.sender);
    await service.updateStatut(tacheId, statut, actor);
  });
}
