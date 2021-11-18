import fs from 'fs-extra'
import path from 'path'
import { is } from 'electron-util'
import { app } from 'electron'

export const IS_LOCAL = process.env.NODE_ENV === 'development'
export const ELECTRON_APP: Electron.App = is.main ? app : require('@electron/remote').app

// package.json所在的目录
export const PROJECT_PATH = IS_LOCAL ? process.cwd() : ELECTRON_APP.getAppPath()
export const webpackJson = fs.readJsonSync(path.join(PROJECT_PATH, 'package.json'))
const envJson = fs.readJSONSync(path.join(PROJECT_PATH, 'env.json'))
export const WEBPACK_PORT = envJson.dev.WEBPACK_PORT
