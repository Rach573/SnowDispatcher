import type { AuthUser } from '../../shared/types/Auth';
import type { UserRole } from '../../shared/types/DatabaseModels';

const CURRENT_KEY = 'sd_currentUser';

export function getCurrentUser(): AuthUser | null {
  try {
    const raw = localStorage.getItem(CURRENT_KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch (e) {
    return null;
  }
}

export function setCurrentUser(user: AuthUser | null): void {
  if (user) localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
  else localStorage.removeItem(CURRENT_KEY);
}

export async function login(username: string, password: string): Promise<AuthUser> {
  const user = await window.api.auth.login(username, password);
  setCurrentUser(user);
  return user;
}

export function logout(): void {
  setCurrentUser(null);
}

export async function fetchUsers(): Promise<AuthUser[]> {
  return await window.api.auth.getUsers();
}

export async function createUserWithCredentials(username: string, password: string, role: UserRole = 'agent'): Promise<AuthUser> {
  return await window.api.auth.createUser(username, password, role);
}

export async function deleteUser(username: string): Promise<void> {
  await window.api.auth.deleteUser(username);
}

export async function resetPassword(username: string, newPassword: string): Promise<void> {
  await window.api.auth.resetPassword(username, newPassword);
}
