// @flow

import React, { Component } from 'react'
import { applyMiddleware, createStore } from 'redux'
import { faCheckSquare, faCoffee, faCopy } from '@fortawesome/free-solid-svg-icons'

import Navigation from './scenes/Navigation'
import { Provider } from 'react-redux'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

library.add(fab, faCopy, faCheckSquare, faCoffee)

export default class App extends Component<{},{}> {
  render () {
    return <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Navigation />
  </Provider>
  }
}

