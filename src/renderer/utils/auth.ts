// Simple client-side auth utilities for the renderer.
// NOTE: This is intentionally minimal and stores data in localStorage.
// In production, authentication should be handled by a secure backend.

export type SdUser = {
  id: number;
  username: string;
  password: string; // plain text here for simplicity (NOT for production)
  role?: string;
};

const USERS_KEY = 'sd_users';
const CURRENT_KEY = 'sd_currentUser';
const MAX_SLOTS = 4;

export function seedUsersIfNeeded(): void {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    const defaultUsers: SdUser[] = [
      { id: 1, username: 'admin', password: 'admin', role: 'admin' },
      { id: 2, username: 'alice', password: 'alice123', role: 'user' },
      { id: 3, username: 'bob', password: 'bob123', role: 'user' },
      { id: 4, username: 'carol', password: 'carol123', role: 'user' },
    ];

    if (!raw) {
      // No users yet — write the full default set
      localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
      return;
    }

    // If users exist but some default accounts are missing, merge them without exceeding MAX_SLOTS
    try {
      const existing = JSON.parse(raw) as SdUser[];
      const merged = [...existing];
      for (const du of defaultUsers) {
        if (merged.length >= MAX_SLOTS) break;
        const exists = merged.some((u) => u.username === du.username);
        if (!exists) merged.push(du);
      }
      // If merged length changed, save it
      if (merged.length !== existing.length) {
        localStorage.setItem(USERS_KEY, JSON.stringify(merged));
      }
    } catch (e) {
      // If parsing fails, overwrite with defaults to recover
      localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }
  } catch (e) {
    // ignore
    // In electron secure storage should be used instead.
  }
}

export function getUsers(): SdUser[] {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as SdUser[]) : [];
  } catch (e) {
    return [];
  }
}

export function findUser(username: string): SdUser | undefined {
  const users = getUsers();
  return users.find((u) => u.username === username);
}

export function validateCredentials(username: string, password: string): boolean {
  const u = findUser(username);
  if (!u) return false;
  return u.password === password;
}

export function getCurrentUser(): SdUser | null {
  try {
    const raw = localStorage.getItem(CURRENT_KEY);
    return raw ? (JSON.parse(raw) as SdUser) : null;
  } catch (e) {
    return null;
  }
}

export function setCurrentUser(user: SdUser | null): void {
  if (user) localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
  else localStorage.removeItem(CURRENT_KEY);
}

export function slotCount(): number {
  return getUsers().length;
}

export function canCreateUser(): boolean {
  return slotCount() < MAX_SLOTS;
}

export function createUser(user: SdUser): boolean {
  const users = getUsers();
  if (users.length >= MAX_SLOTS) return false;
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
}

function nextUserId(): number {
  const users = getUsers();
  let max = 0;
  for (const u of users) if (u.id && u.id > max) max = u.id;
  return max + 1;
}

export function createUserWithCredentials(username: string, password: string, role = 'user'): boolean {
  const users = getUsers();
  if (users.length >= MAX_SLOTS) return false;
  const exists = users.some((u) => u.username === username);
  if (exists) return false;
  const id = nextUserId();
  users.push({ id, username, password, role });
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
}

export function deleteUser(username: string): boolean {
  const users = getUsers();
  const index = users.findIndex((u) => u.username === username);
  if (index === -1) return false;
  users.splice(index, 1);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
}

export function resetPassword(username: string, newPassword: string): boolean {
  const users = getUsers();
  const u = users.find((x) => x.username === username);
  if (!u) return false;
  u.password = newPassword;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return true;
}

export function logout(): void {
  setCurrentUser(null);
}
