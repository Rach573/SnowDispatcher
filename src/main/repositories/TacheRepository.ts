// src/main/repositories/TacheRepository.ts
import { prisma } from './prisma/client';
import { logger } from '../utils/logger';
import type { Tache, Staff } from '../../shared/types/DatabaseModels';

/**
 * Repository responsible for Tache (Task/Ticket) data access operations.
 * Encapsulates all Prisma interactions for the Taches table.
 */
export class TacheRepository {
  /**
   * Retrieves all taches/tickets.
   */
  async findAll(): Promise<Tache[]> {
    logger.info('TacheRepository.findAll: executing prisma.taches.findMany with agent include');
    // Order by date desc at the DB level to ensure recent tasks appear first
    // Include the related agent user (id and username) so service can enrich the result
    const tasks = await prisma.taches.findMany({
      orderBy: {
        date_attribution: 'desc',
      },
      include: {
        agent: {
          select: { id: true, username: true },
        },
      },
    });
    logger.info(`TacheRepository.findAll: returned ${tasks.length} rows`);
    return tasks as unknown as Tache[];
  }

  /**
   * Creates a new tache/ticket in the database.
   */
  async create(data: {
    mail_id: number;
    agent_user_id: number;
    statut_tache: string;
    priorite_calculee: string;
    date_attribution: string;
  }): Promise<{ id: number }> {
    const created = await prisma.taches.create({
      data,
    });
    return { id: created.id };
  }

  /**
   * Finds a staff member by ID.
   */
  async findStaffById(staffId: number): Promise<Staff | null> {
    const staff = await prisma.staff.findUnique({
      where: { id: staffId },
    });
    return staff as unknown as Staff | null;
  }
}
