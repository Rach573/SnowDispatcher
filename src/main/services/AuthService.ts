import type { AuthUser } from '../../shared/types/Auth';
import type { User, UserRole } from '../../shared/types/DatabaseModels';
import { UserRepository } from '../repositories/UserRepository';
import { hashPassword, verifyPassword } from '../utils/password';

const MAX_SLOTS = 4;
const DEFAULT_USERS: Array<{ username: string; password: string; role: UserRole }> = [
  { username: 'admin', password: 'admin', role: 'admin' },
  { username: 'alice', password: 'alice123', role: 'agent' },
  { username: 'bob', password: 'bob123', role: 'agent' },
  { username: 'carol', password: 'carol123', role: 'agent' },
];

export class AuthService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  private sanitize(user: User): AuthUser {
    return {
      id: user.id,
      username: user.username,
      role: user.role,
    };
  }

  async ensureSeedUsers(): Promise<void> {
    const count = await this.repository.count();
    if (count === 0) {
      for (const entry of DEFAULT_USERS) {
        await this.repository.createUser({
          username: entry.username,
          passwordHash: hashPassword(entry.password),
          role: entry.role,
        });
      }
      return;
    }

    for (const entry of DEFAULT_USERS) {
      const existing = await this.repository.findByUsername(entry.username);
      if (!existing) {
        await this.repository.createUser({
          username: entry.username,
          passwordHash: hashPassword(entry.password),
          role: entry.role,
        });
      }
    }
  }

  async login(username: string, password: string): Promise<AuthUser> {
    const user = await this.repository.findByUsername(username);
    if (!user) {
      throw new Error('Identifiants invalides');
    }

    const stored = user.password_hash ?? '';
    let isValid = false;

    if (stored.includes(':')) {
      isValid = verifyPassword(password, stored);
    } else if (stored.length > 0) {
      isValid = stored === password;
      if (isValid) {
        const newHash = hashPassword(password);
        await this.repository.updatePassword(user.username, newHash);
        user.password_hash = newHash as any;
      }
    }

    if (!isValid) {
      const defaultEntry = DEFAULT_USERS.find((entry) => entry.username === username);
      if (defaultEntry && defaultEntry.password === password) {
        const newHash = hashPassword(password);
        await this.repository.updatePassword(username, newHash);
        isValid = true;
      }
    }

    if (!isValid) {
      throw new Error('Identifiants invalides');
    }

    return this.sanitize(user);
  }

  async listUsers(): Promise<AuthUser[]> {
    const users = await this.repository.findAll();
    return users.map((u) => this.sanitize(u));
  }

  async createUser(username: string, password: string, role: UserRole = 'agent'): Promise<AuthUser> {
    const count = await this.repository.count();
    if (count >= MAX_SLOTS) {
      throw new Error('Nombre maximum de comptes atteint.');
    }
    const existing = await this.repository.findByUsername(username);
    if (existing) {
      throw new Error('Nom d’utilisateur déjà utilisé.');
    }
    const created = await this.repository.createUser({
      username,
      passwordHash: hashPassword(password),
      role,
    });
    return this.sanitize(created);
  }

  async deleteUser(username: string): Promise<void> {
    const existing = await this.repository.findByUsername(username);
    if (!existing) {
      throw new Error('Utilisateur introuvable.');
    }
    await this.repository.deleteByUsername(username);
  }

  async resetPassword(username: string, newPassword: string): Promise<void> {
    const existing = await this.repository.findByUsername(username);
    if (!existing) {
      throw new Error('Utilisateur introuvable.');
    }
    await this.repository.updatePassword(username, hashPassword(newPassword));
  }
}
