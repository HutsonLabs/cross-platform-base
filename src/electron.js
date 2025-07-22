const { app, BrowserWindow } = require('electron');
const path = require('path');

// More robust development detection for Vite
const isDev = !app.isPackaged && (process.env.NODE_ENV !== 'production');

if (require('electron-squirrel-startup')) app.quit();

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    transparent: true,
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'hidden',
    trafficLightPosition: { x: 10, y: 10 },
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      // Add some additional security for Vite
      webSecurity: true,
      allowRunningInsecureContent: false,
      experimentalFeatures: false
    },
  });

  // Vite dev server URL (keeping same port as before)
  const devUrl = 'http://localhost:3000';
  
  // Production build path - Vite builds to the same 'build' folder
  const prodPath = `file://${path.join(__dirname, '../build/index.html')}`;
  
  const startUrl = isDev ? devUrl : prodPath;
  
  mainWindow.loadURL(startUrl);
  
  // Enhanced development tools for Vite
  if (isDev) {
    mainWindow.webContents.openDevTools();
    
    // Handle Vite HMR reload
    mainWindow.webContents.on('did-fail-load', () => {
      console.log('Failed to load, retrying...');
      setTimeout(() => {
        mainWindow.reload();
      }, 1000);
    });
  }

  // Handle external links (security improvement)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    require('electron').shell.openExternal(url);
    return { action: 'deny' };
  });
};

app.whenReady().then(() => {
  createWindow();
  
  // macOS specific behavior
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Handle certificate errors in development (for localhost)
if (isDev) {
  app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    if (url.startsWith('http://localhost:')) {
      event.preventDefault();
      callback(true);
    } else {
      callback(false);
    }
  });
}