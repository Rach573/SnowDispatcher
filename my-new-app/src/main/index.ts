import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { registerMailHandlers } from './ipc/mail.ipc';
import { registerTacheHandlers } from './ipc/tache.ipc';

/**
 * Crée et affiche la fenêtre principale de l'application.
 */
function createWindow(): void {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
    },
  });

  // En développement, on pourrait charger Vite/DevServer. Pour un build, charger le fichier HTML.
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    win.loadFile(path.join(__dirname, '../../index.html'));
  }
}

// Enregistrement des handlers avant la création de la fenêtre
app.whenReady().then(() => {
  registerMailHandlers();
  registerTacheHandlers();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quitter proprement lorsque toutes les fenêtres sont fermées (sauf sur macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});