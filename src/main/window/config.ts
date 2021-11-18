import { WEBPACK_PORT, IS_LOCAL } from '@constant/index'

export const baseDevAddress = `http://localhost:${WEBPACK_PORT}/`
export const baseProdAddress = ''
export const LOAD_URL = IS_LOCAL ? baseDevAddress : baseProdAddress
