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

  ipcMain.handle('mails:getAdminList', async () => {
    return await service.getAdminMails();
  });

  ipcMain.handle('mails:assign', async (_event, mailId: number, agentUserId: number) => {
    await service.assignMail(mailId, agentUserId);
  });

  ipcMain.handle('mails:delete', async (_event, mailId: number) => {
    await service.deleteMail(mailId);
  });

  ipcMain.handle('mails:reassign', async (_event, mailId: number, agentUserId: number) => {
    await service.reassignMail(mailId, agentUserId);
  });
}
