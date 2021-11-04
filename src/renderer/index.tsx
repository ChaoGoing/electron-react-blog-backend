import React from 'react'
import ReactDOM from 'react-dom'
// import { configure } from 'mobx'
// import { Router } from 'react-router-dom'
// import { createHashHistory } from 'history'
// import { syncHistoryWithStore } from 'mobx-react-router'
// import { ConfigProvider, message } from 'antd'
// import zh_CN from 'antd/lib/locale-provider/zh_CN'
// import moment from 'moment'
// import 'moment/locale/zh-cn'

import App  from './App.tsx'

const render = () => {
    const element = (
        <App />
    )
    ReactDOM.render(element, document.getElementById('app'))
}

render()