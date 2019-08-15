// @flow
import './index.css'

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { TransactionAmountScreen } from './scenes/TransactionAmountScreen'

const root = document.getElementById('root')
// $FlowFixMe
ReactDOM.render(<App />, root)

export {
  TransactionAmountScreen
}


