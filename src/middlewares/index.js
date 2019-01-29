//External dependences
import { apllyMidleware } from 'redux'

//External middleware
import thunk from 'redux-thunk'

//Our middlewares
import checker from './checker'
import logger from './logger'

export default apllyMidleware(
  thunk,
  checker,
  logger
)