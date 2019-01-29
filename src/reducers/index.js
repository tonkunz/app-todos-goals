//Library dependences
import { combineReducers } from 'redux'

//Our reducers
import todos from './todos'
import goals from './goals'
import loading from './loading'

export default combineReducers({
  todos,
  goals,
  loading
})