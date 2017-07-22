import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import allReducers from './components/all-reducers'
import App from './components/app'

//This is the starting point of the App
const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
