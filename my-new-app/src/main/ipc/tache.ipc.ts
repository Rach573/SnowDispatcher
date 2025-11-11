import { ipcMain } from 'electron';
import { TacheService } from '../services/TacheService';

/**
 * Registers IPC channels related to tasks/tickets.
 */
export function registerTacheHandlers(): void {
  const service = new TacheService();

  ipcMain.handle('taches:getAll', async () => {
    return await service.getAll();
  });

  ipcMain.handle('taches:create', async (_event, mailId: number, agentUserId: number) => {
    return await service.createTache(mailId, agentUserId);
  });
}