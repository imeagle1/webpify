const { app, BrowserWindow, Menu, session, shell, dialog } = require('electron');
const path = require('path');

let win = null;

process.on('uncaughtException', err => {
  try { dialog.showErrorBox('WebPify', String(err && err.stack || err)); } catch (e) {}
});

function createWindow() {
  Menu.setApplicationMenu(null);
  win = new BrowserWindow({
    width: 1360, height: 860, minWidth: 380, minHeight: 600, show: false,
    backgroundColor: '#0a0d1c', title: 'WebPify | iRamo.Ai',
    icon: path.join(__dirname, 'build', 'icon.png'),
    webPreferences: { devTools: false, contextIsolation: true, sandbox: true, nodeIntegration: false }
  });
  win.once('ready-to-show', () => win.show());
  win.webContents.on('did-fail-load', (_e, code, desc) => dialog.showErrorBox('WebPify', 'Load failed: ' + desc + ' (' + code + ')'));
  win.loadFile(path.join(__dirname, 'src', 'index.html'));
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  win.webContents.on('will-navigate', e => e.preventDefault());
  win.on('closed', () => { win = null; });
}

if (!app.requestSingleInstanceLock()) {
  app.quit();
} else {
  // If the app is already running, bring its window to the front
  app.on('second-instance', () => {
    if (win) { if (win.isMinimized()) win.restore(); win.show(); win.focus(); }
    else createWindow();
  });
  app.whenReady().then(() => {
    session.defaultSession.setPermissionRequestHandler((_, __, cb) => cb(false));
    createWindow();
  });
  app.on('window-all-closed', () => app.quit());
}
