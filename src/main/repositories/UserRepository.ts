import { prisma } from './prisma/client';
import type { User } from '../../shared/types/DatabaseModels';

export interface AgentWorkload {
  id: number;
  username: string;
  openTasks: number;
}

type CreateUserInput = {
  username: string;
  passwordHash: string;
  role: User['role'];
};

/**
 * Repository for accessing IT users / agents.
 */
export class UserRepository {
  async count(): Promise<number> {
    return await prisma.users.count();
  }

  async findAll(): Promise<User[]> {
    const users = await prisma.users.findMany({
      orderBy: { username: 'asc' },
    });
    return users as unknown as User[];
  }

  async findByUsername(username: string): Promise<User | null> {
    if (!username) return null;
    const user = await prisma.users.findUnique({
      where: { username },
    });
    return user as unknown as User | null;
  }

  async createUser(data: CreateUserInput): Promise<User> {
    const created = await prisma.users.create({
      data: {
        username: data.username,
        password_hash: data.passwordHash,
        role: data.role,
      },
    });
    return created as unknown as User;
  }

  async updatePassword(username: string, passwordHash: string): Promise<void> {
    await prisma.users.update({
      where: { username },
      data: { password_hash: passwordHash },
    });
  }

  async deleteByUsername(username: string): Promise<void> {
    await prisma.users.delete({
      where: { username },
    });
  }

  /**
   * Loads all agents with the number of non résolu tasks assigned to them.
   */
  async findAgentsWithOpenTaskCount(): Promise<AgentWorkload[]> {
    const agents = await prisma.users.findMany({
      where: {
        role: 'agent',
      },
      select: {
        id: true,
        username: true,
        taches: {
          where: {
            statut_tache: {
              not: 'Resolu',
            },
          },
          select: {
            id: true,
          },
        },
      },
    });

    interface AgentWithTaches {
      id: number;
      username: string;
      taches: { id: number }[];
    }

    return (agents as AgentWithTaches[]).map((agent): AgentWorkload => ({
      id: agent.id,
      username: agent.username,
      openTasks: agent.taches.length,
    }));
  }
}
