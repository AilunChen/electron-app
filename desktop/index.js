const { app, BrowserWindow } = require('electron')
const path = require('path')

const isDevelopment = process.env.NODE_ENV === 'development'

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1160,
    height: 752,
    minHeight: 632,
    minWidth: 960,
  })

  if (isDevelopment) {
    mainWindow.loadURL('http://localhost:3000/')
  } else {
    // TODO:本地构建的 index 展示空白问题，使用线上网页作为展示
    // const entryPath = path.resolve(__dirname, '../build/index.html')
    // mainWindow.loadFile(entryPath)
    mainWindow.loadURL('https://www.dp.tech/')
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
}


app.on('ready', () => {
    createMainWindow()
})
