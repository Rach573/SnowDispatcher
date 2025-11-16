import { ipcMain } from 'electron';
import { AuthService } from '../services/AuthService';
import type { UserRole } from '../../shared/types/DatabaseModels';
import { ensureAdmin, setSessionUser } from '../utils/session';

export function registerAuthHandlers(): void {
  const service = new AuthService();
  service.ensureSeedUsers().catch((err) => {
    console.error('Failed to seed default users', err);
  });

  ipcMain.handle('auth:login', async (event, username: string, password: string) => {
    const user = await service.login(username, password);
    setSessionUser(event.sender, user);
    return user;
  });

  ipcMain.handle('auth:logout', async (event) => {
    setSessionUser(event.sender, null);
  });

  ipcMain.handle('auth:getUsers', async (event) => {
    ensureAdmin(event.sender);
    return await service.listUsers();
  });

  ipcMain.handle('auth:createUser', async (event, username: string, password: string, role: UserRole) => {
    ensureAdmin(event.sender);
    return await service.createUser(username, password, role);
  });

  ipcMain.handle('auth:deleteUser', async (event, username: string) => {
    ensureAdmin(event.sender);
    await service.deleteUser(username);
  });

  ipcMain.handle('auth:resetPassword', async (event, username: string, newPassword: string) => {
    ensureAdmin(event.sender);
    await service.resetPassword(username, newPassword);
  });
}
