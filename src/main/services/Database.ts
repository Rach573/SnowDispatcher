// src/main/services/Database.ts
// DEPRECATED: This file is no longer used. Prisma is now used for database access.
// See src/main/repositories/prisma/client.ts for the new Prisma-based approach.

/*
import mysql from 'mysql2/promise';
import { logger } from '../utils/logger';

// Configuration de la connexion MariaDB
export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'snowdispatcher',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

logger.info('Pool de connexions à la base de données créé');
*/
