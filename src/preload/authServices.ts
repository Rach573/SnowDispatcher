import { ipcRenderer } from 'electron';
import type { AuthUser } from '../shared/types/Auth';
import type { UserRole } from '../shared/types/DatabaseModels';

export const authServices = {
  login: async (username: string, password: string): Promise<AuthUser> => {
    return await ipcRenderer.invoke('auth:login', username, password);
  },
  getUsers: async (): Promise<AuthUser[]> => {
    return await ipcRenderer.invoke('auth:getUsers');
  },
  createUser: async (username: string, password: string, role: UserRole): Promise<AuthUser> => {
    return await ipcRenderer.invoke('auth:createUser', username, password, role);
  },
  deleteUser: async (username: string): Promise<void> => {
    await ipcRenderer.invoke('auth:deleteUser', username);
  },
  resetPassword: async (username: string, newPassword: string): Promise<void> => {
    await ipcRenderer.invoke('auth:resetPassword', username, newPassword);
  },
};

export type AuthServices = typeof authServices;
