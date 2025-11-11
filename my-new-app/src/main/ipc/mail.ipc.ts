import { ipcMain } from 'electron';
import { MailService } from '../services/MailService';

/**
 * Registers IPC handlers for mail-related operations.
 * These channels are consumed on the renderer side via `ipcRenderer.invoke()`.
 */
export function registerMailHandlers(): void {
  const service = new MailService();

  ipcMain.handle('mails:getAll', async () => {
    return await service.getAllMails();
  });

  ipcMain.handle('mails:assign', async (_event, mailId: number, agentUserId: number) => {
    await service.assignMail(mailId, agentUserId);
  });
}