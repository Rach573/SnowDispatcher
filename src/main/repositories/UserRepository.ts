import { prisma } from './prisma/client';
import type { User, UserRole } from '../../shared/types/DatabaseModels';

export class UserRepository {
  async count(): Promise<number> {
    return await prisma.users.count();
  }

  async findAll(): Promise<User[]> {
    const rows = await prisma.users.findMany({
      orderBy: { id: 'asc' },
    });
    return rows as unknown as User[];
  }

  async findByUsername(username: string): Promise<User | null> {
    const user = await prisma.users.findUnique({
      where: { username },
    });
    return user as unknown as User | null;
  }

  async createUser(data: { username: string; passwordHash: string; role: UserRole }): Promise<User> {
    const created = await prisma.users.create({
      data: {
        username: data.username,
        password_hash: data.passwordHash,
        role: data.role ?? 'agent',
      },
    });
    return created as unknown as User;
  }

  async deleteByUsername(username: string): Promise<void> {
    await prisma.users.delete({
      where: { username },
    });
  }

  async updatePassword(username: string, passwordHash: string): Promise<void> {
    await prisma.users.update({
      where: { username },
      data: { password_hash: passwordHash },
    });
  }
}
