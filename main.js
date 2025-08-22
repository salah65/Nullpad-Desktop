// main.js
const { app, BrowserWindow, globalShortcut } = require('electron');
const { SERVER_URL } = require('./config'); // CommonJS require

let mainWindow;
let showWindow = true;
let stage;

function showMainWindow() {
  mainWindow.show();
  if (stage === 2) mainWindow.webContents.send('show-app');
  showWindow = true;
}

function hideMainWindow() {
  mainWindow.webContents.send('hide-app');
  mainWindow.hide();
  showWindow = false;
}

function createWindow() {
  stage = 0;
  mainWindow = new BrowserWindow({
    width: 600,
    height: 450,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
    frame: false,
    transparent: true,
    backgroundColor: '#28398dff',
    alwaysOnTop: true,
    paintWhenInitiallyHidden: true,
    contentProtection: true,
    type: 'toolbar',
    show: true,
    resizable: true,
    fullscreenable: true,
  });

  mainWindow.setContentProtection(true);
  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  mainWindow.setAlwaysOnTop(true, 'screen-saver', 1);

  // Global shortcuts
  globalShortcut.register('CommandOrControl+Shift+W', () => {
    if (showWindow) hideMainWindow(); else showMainWindow();
  });
  globalShortcut.register('CommandOrControl+Shift+Q', () => { app.quit(); });

  const room = process.env.ROOM; // optional

  if (room) {
    mainWindow.loadURL(`https://nullpad.onrender.com/?room=${encodeURIComponent(room)}`);
  } else {
    mainWindow.loadURL('https://nullpad.onrender.com');
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});