import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './style/lib/animate.css'
import './style/index.less'
import { App } from './App'
import registerServiceWorker from './registerServiceWorker'

// console.log(process.env)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
