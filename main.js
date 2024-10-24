const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js')
    }
  })

  win.loadFile('index.html')
  //win.webContents.openDevTools()

  ipcMain.on('open-new-table', () => {
    const win = new BrowserWindow({
      width: 300,
      height: 300
    })
    win.loadFile('addUser.html')
    win.webContents.openDevTools()
  })
};

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
