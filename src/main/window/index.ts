import { BrowserWindow } from 'electron'

export type ReservedWinType = null | 'viewer' | 'chatHistory' | 'inspect'

interface WindowParams {
  id: number
  type: ReservedWinType
  data?: any
}
export const winStack = []

export function createLoginWindow() {}

export function createWindow(config?: WindowParams) {
  const _config = Object.assign({ id: null, type: null }, config || {})
  return new Promise<BrowserWindow>(resolve => {
    const blankWin = winStack.find(_win => !_win.type)
  })
}
