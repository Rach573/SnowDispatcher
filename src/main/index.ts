import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import { registerMailHandlers } from './ipc/mail.ipc';
import { registerTacheHandlers } from './ipc/tache.ipc';
import { registerAuthHandlers } from './ipc/auth.ipc';
import { MailRepository } from './repositories/MailRepository';
import { GmailSyncService } from './services/GmailSyncService';
import { AutoAssignmentService } from './services/AutoAssignmentService';
import type { MailSyncResult } from './services/types';
import type { AssignmentNotification } from '../shared/types/Events';

/**
 * Crée et affiche la fenêtre principale de l'application.
 */
function createWindow(): void {
  // Résolution robuste du preload script : chercher plusieurs emplacements
  const preloadCandidates = [
    path.join(__dirname, '../preload/index.js'),
    path.join(__dirname, '../preload/index.mjs'),
    path.join(__dirname, '../../.vite/preload/index.js'),
    path.join(__dirname, '../.vite/preload/index.js'),
    path.join(process.cwd(), '.vite', 'preload', 'index.js'),
  ];

  let resolvedPreload: string | undefined;
  for (const p of preloadCandidates) {
    try {
      if (fs.existsSync(p)) {
        resolvedPreload = p;
        break;
      }
    } catch (e) {
      // ignore
    }
  }

  if (!resolvedPreload) {
    // fallback to original location (may fail in some dev setups)
    resolvedPreload = path.join(__dirname, '../preload/index.js');
  }

  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: resolvedPreload,
      contextIsolation: true,
    },
  });

  // Debug: log whether preload file exists (helps diagnose missing API exposure)
  try {
    const preloadPath = path.join(__dirname, '../preload/index.js');
    const exists = require('fs').existsSync(preloadPath);
    console.log('Preload path ->', preloadPath, 'exists =', exists);
  } catch (e) {
    console.error('Error checking preload path existence', e);
  }

  // Log utile pour debug : vérifier si le plugin Vite a fourni une URL de dev server
  console.log('process.env.VITE_DEV_SERVER_URL =', process.env.VITE_DEV_SERVER_URL);

  // En développement, on pourrait charger Vite/DevServer. Pour un build, charger le fichier HTML.
  if (process.env.VITE_DEV_SERVER_URL) {
    const devUrl = process.env.VITE_DEV_SERVER_URL;
    console.log('Chargement du renderer via Vite dev server ->', devUrl);
    win.loadURL(devUrl).catch((err) => {
      console.error('Erreur lors de win.loadURL(devUrl):', err);
    });
    win.webContents.openDevTools();
  } else {
    // En mode production local (sans Vite), préférer le build de Vite (dist)
    const distIndex = path.join(__dirname, '../../dist/index.html');
    const fallbackIndex = path.join(__dirname, '../../index.html');
    const indexPath = fs.existsSync(distIndex) ? distIndex : fallbackIndex;
    console.log('Chargement du renderer via fichier local ->', indexPath);
    win.loadFile(indexPath).catch((err) => {
      console.error('Erreur lors de win.loadFile(index.html):', err);
    });
    // Ouvrir les DevTools aussi en production local pour voir les erreurs de chargement
    win.webContents.openDevTools();

    // Log success / failure de chargement de la page
    win.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
      console.error('Échec du chargement du renderer:', { errorCode, errorDescription, validatedURL });
    });
    win.webContents.on('did-finish-load', () => {
      console.log('Renderer: did-finish-load (index.html chargé)');
    });
  }
}

// Enregistrement des handlers avant la création de la fenêtre
app.whenReady().then(() => {
  registerAuthHandlers();
  registerMailHandlers();
  registerTacheHandlers();
  createWindow();

  // Start mail syncer on a timer. Gmail must be configured, otherwise sync remains disabled.
  const mailRepo = new MailRepository();
  const gmailSync = new GmailSyncService(mailRepo);
  const syncServices: Array<{ sync: () => Promise<MailSyncResult> }> = [];
  if (gmailSync.isConfigured()) {
    syncServices.push(gmailSync);
  } else {
    console.warn(
      'Gmail sync désactivée: renseignez GMAIL_CLIENT_ID / SECRET / REFRESH_TOKEN / USER_EMAIL puis relancez l’application.',
    );
  }
  const autoAssigner = new AutoAssignmentService(mailRepo);
  let syncTimer: NodeJS.Timeout | null = null;

  const runSync = async () => {
    if (syncServices.length === 0) {
      return;
    }
    let totalInserted = 0;
    const newMailIds: number[] = [];

    for (const service of syncServices) {
      try {
        const result = await service.sync();
        totalInserted += result.inserted;
        newMailIds.push(...result.mailIds);
      } catch (e) {
        console.error('Mail sync error', e);
      }
    }

    let assignments: AssignmentNotification[] = [];
    if (newMailIds.length > 0) {
      try {
        assignments = await autoAssigner.assignMails(newMailIds);
      } catch (e) {
        console.error('Auto assignment error', e);
      }
    }

    if (totalInserted > 0) {
      // Notify all renderer windows that mails were updated
      for (const w of BrowserWindow.getAllWindows()) {
        try {
          w.webContents.send('mail:updated', { inserted: totalInserted });
        } catch (e) {
          console.warn('Failed to send mail:updated to a window', e);
        }
      }
    }

    if (assignments.length > 0) {
      for (const w of BrowserWindow.getAllWindows()) {
        try {
          w.webContents.send('tache:assigned', { assignments });
        } catch (e) {
          console.warn('Failed to send tache:assigned to a window', e);
        }
      }
    }
  };

  // Run immediately once, then every 15s
  if (syncServices.length > 0) {
    runSync();
    syncTimer = setInterval(runSync, 15_000);
  }

  // Clear timer on app quit
  app.on('before-quit', () => {
    if (syncTimer) {
      clearInterval(syncTimer);
      syncTimer = null;
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quitter proprement lorsque toutes les fenêtres sont fermées (sauf sur macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
