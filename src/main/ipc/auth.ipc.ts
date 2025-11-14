import { ipcMain } from 'electron';
import { AuthService } from '../services/AuthService';
import type { UserRole } from '../../shared/types/DatabaseModels';

export function registerAuthHandlers(): void {
  const service = new AuthService();
  service.ensureSeedUsers().catch((err) => {
    console.error('Failed to seed default users', err);
  });

  ipcMain.handle('auth:login', async (_event, username: string, password: string) => {
    return await service.login(username, password);
  });

  ipcMain.handle('auth:getUsers', async () => {
    return await service.listUsers();
  });

  ipcMain.handle('auth:createUser', async (_event, username: string, password: string, role: UserRole) => {
    return await service.createUser(username, password, role);
  });

  ipcMain.handle('auth:deleteUser', async (_event, username: string) => {
    await service.deleteUser(username);
  });

  ipcMain.handle('auth:resetPassword', async (_event, username: string, newPassword: string) => {
    await service.resetPassword(username, newPassword);
  });
}
