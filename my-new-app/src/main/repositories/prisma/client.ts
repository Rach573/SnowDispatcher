// src/main/repositories/prisma/client.ts
// MODIFIÉ : Utilisation de 'path.join' pour un chemin absolu et 'require'
import * as path from 'path';

// Déterminer le chemin du client généré
// __dirname pointe vers .vite/build/ après compilation.
// Nous devons remonter et pointer vers le dossier source original.
const generatedClientPath = path.join(
  __dirname,
  '../../src/main/repositories/prisma/generated/default'
);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require(generatedClientPath);
import { logger } from '../../utils/logger';

/**
 * Instance unique du client Prisma, configurée avec un logging
 * personnalisé pour s'intégrer avec notre logger.
 */
export const prisma = new PrismaClient({
  log: [
    { emit: 'event', level: 'query' },
    { emit: 'event', level: 'info' },
    { emit: 'event', level: 'warn' },
    { emit: 'event', level: 'error' },
  ],
});

// ... (le reste du fichier ne change pas) ...

// Écoute des événements de log de Prisma
prisma.$on('query', (e) => {
  logger.debug(`[Prisma Query]: ${e.query}`);
  logger.debug(`[Prisma Params]: ${e.params}`);
  logger.debug(`[Prisma Duration]: ${e.duration}ms`);
});

prisma.$on('info', (e) => {
  logger.info(`[Prisma Info]: ${e.message}`);
});

prisma.$on('warn', (e) => {
  logger.warn(`[Prisma Warn]: ${e.message}`);
});

prisma.$on('error', (e) => {
  logger.error(`[Prisma Error]: ${e.message}`);
});

logger.info('Prisma client singleton initialisé.');