// src/main/repositories/TacheRepository.ts
import { prisma } from './prisma/client';
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
    const tasks = await prisma.taches.findMany();
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
