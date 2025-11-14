// src/main/repositories/prisma/client.ts
// MODIFIÉ : Utilisation de 'path.join' pour un chemin absolu et 'require'
import * as path from 'path';
import * as fs from 'fs';
import dotenv from 'dotenv';

// Charger les variables d'environnement depuis .env si présentes (utile en dev)
dotenv.config();

// Déterminer de manière robuste le chemin du client généré.
// Après build, __dirname peut pointer vers .vite/build/... ; le client généré
// est généralement situé dans un dossier `generated` près de ce fichier.
const candidatePaths = [
  path.join(__dirname, 'generated', 'index.js'),
  path.join(__dirname, 'generated', 'default', 'index.js'),
  // fallback vers le chemin source (utile en environnement non compilé)
  path.join(__dirname, '../../src/main/repositories/prisma/generated/index.js'),
  path.join(__dirname, '../../src/main/repositories/prisma/generated/default/index.js'),
];

let resolvedClientPath: string | null = null;
for (const p of candidatePaths) {
  try {
    if (fs.existsSync(p)) {
      resolvedClientPath = p;
      break;
    }
  } catch (_) {
    // ignore and try next
  }
}

// Si aucun des candidats n'est trouvé, retomber sur l'ancien comportement
if (!resolvedClientPath) {
  resolvedClientPath = path.join(__dirname, '../../src/main/repositories/prisma/generated/default');
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require(resolvedClientPath);
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
prisma.$on('query', (e: any) => {
  logger.debug(`[Prisma Query]: ${e.query}`);
  logger.debug(`[Prisma Params]: ${e.params}`);
  logger.debug(`[Prisma Duration]: ${e.duration}ms`);
});

prisma.$on('info', (e: any) => {
  logger.info(`[Prisma Info]: ${e.message}`);
});

prisma.$on('warn', (e: any) => {
  logger.warn(`[Prisma Warn]: ${e.message}`);
});

prisma.$on('error', (e: any) => {
  logger.error(`[Prisma Error]: ${e.message}`);
});

logger.info('Prisma client singleton initialisé.');
// Log the DATABASE_URL and resolved generated client path for debugging
logger.info('Prisma resolved generated client path =', resolvedClientPath);
logger.info('Prisma using DATABASE_URL =', process.env.DATABASE_URL);