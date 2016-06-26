const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow

require('./leapmotion.js')

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 450,
    height: 400,
    resizable: false,
   })
   mainWindow.setMenu(null);
   mainWindow.loadURL(`file://${__dirname}/app/index.html`)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
