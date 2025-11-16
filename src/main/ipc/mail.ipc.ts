import { ipcMain } from 'electron';
import { MailService } from '../services/MailService';
import { ensureAdmin, ensureAuthenticated } from '../utils/session';

/**
 * Registers IPC handlers for mail-related operations.
 * These channels are consumed on the renderer side via `ipcRenderer.invoke()`.
 */
export function registerMailHandlers(): void {
  const service = new MailService();

  ipcMain.handle('mails:getAll', async (event) => {
    ensureAdmin(event.sender);
    return await service.getAllMails();
  });

  ipcMain.handle('mails:getAdminList', async (event) => {
    ensureAdmin(event.sender);
    return await service.getAdminMails();
  });

  ipcMain.handle('mails:assign', async (event, mailId: number, agentUserId: number) => {
    ensureAdmin(event.sender);
    await service.assignMail(mailId, agentUserId);
  });

  ipcMain.handle('mails:delete', async (event, mailId: number) => {
    ensureAdmin(event.sender);
    await service.deleteMail(mailId);
  });

  ipcMain.handle('mails:reassign', async (event, mailId: number, agentUserId: number) => {
    ensureAdmin(event.sender);
    await service.reassignMail(mailId, agentUserId);
  });

  ipcMain.handle('mails:getOne', async (event, mailId: number) => {
    const actor = ensureAuthenticated(event.sender);
    return await service.getMailDetail(mailId, actor);
  });
}
