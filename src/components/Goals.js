//External dependences
import React from 'react'
import { connect } from 'react-redux'

//Our dependences
import List from './List'
import {
  handleAddGoal,
  handleDeleteGoal
} from '../actions/goals'

class Goals extends React.Component {
  addItem = event => {
    event.preventDefault()
    this.props.dispatch(handleAddGoal(
      this.input.value,
      () => this.input.value = ''
    ))
  }

  removeItem = goal => {
    this.props.dispatch(handleDeleteGoal(goal))
  }

  render() {
    return (
      <div>
        <h1>Lista de Metas</h1>
        <input
          id='goals'
          type='text'
          placeholder='Digite sua meta'
          ref={input => this.input = input}
        />
        <button onClick={this.addItem}>Adicionar Meta</button>
        <List
          removeItem={this.removeItem}
          items={this.props.goals}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  goals: state.goals
}))(Goals)