import { ipcMain } from 'electron';
import { TacheService } from '../services/TacheService';

/**
 * Enregistre les canaux IPC relatifs aux tâches (tickets de suivi).
 */
export function registerTacheHandlers(prisma?: any): void {
  const service = new TacheService(prisma);

  ipcMain.handle('taches:getAll', async () => {
    return await service.getAll();
  });

  ipcMain.handle('taches:create', async (_event, mailId: number, agentUserId: number) => {
    return await service.createTache(mailId, agentUserId);
  });
}