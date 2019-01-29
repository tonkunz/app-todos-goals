//External dependences
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//Our dependences
import App from './components/App'
import reducer from './reducers'
import midleware from './middlewares'

//Style
import './styles/index.css'

const store = createStore(reducer, midleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)