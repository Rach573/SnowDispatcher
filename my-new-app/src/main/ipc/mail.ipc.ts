import { ipcMain } from 'electron';
import { MailService } from '../services/MailService';

/**
 * Enregistre les gestionnaires IPC pour les opérations liées aux mails.
 * Ces canaux sont consommés côté renderer via `ipcRenderer.invoke()`.
 */
export function registerMailHandlers(prisma?: any): void {
  const service = new MailService(prisma);

  ipcMain.handle('mails:getAll', async () => {
    return await service.getAllMails();
  });

  ipcMain.handle('mails:assign', async (_event, mailId: number, agentUserId: number) => {
    await service.assignMail(mailId, agentUserId);
  });
}