//External dependences
import { applyMiddleware } from 'redux'

//External middleware
import thunk from 'redux-thunk'

//Our middlewares
import checker from './checker'
import logger from './logger'

export default applyMiddleware(
  thunk,
  checker,
  logger
)