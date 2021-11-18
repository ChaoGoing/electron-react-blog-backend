import { app, globalShortcut, protocol, dialog, shell, BrowserWindow } from 'electron'
import { is } from 'electron-util'
import logger from 'electron-log'
import { LOAD_URL } from '../window/config'

export default function init() {
  // 只允许启动一个实例
  const gotTheLock = app.requestSingleInstanceLock()
  if (!gotTheLock) {
    logger.info('app尝试打开多个被阻止')
    app.quit()
  } else {
    app.on('ready', () => {
      const win = new BrowserWindow({
        width: 800,
        height: 600
        // webPreferences: {
        //   preload: path.join(__dirname, 'preload.js')
        // }
      })
      win.loadFile(LOAD_URL)
    })
    app.on('activate', () => {
      console.log('activate')
      if (BrowserWindow.getAllWindows().length === 0) {
        console.log('no windows')
      }
    })
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })
  }
}
