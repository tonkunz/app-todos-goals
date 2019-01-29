//External dependences
import React from 'react'
import { connect } from 'react-redux'

//Our dependences
import List from './List'
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from '../actions/todos'

class Todos extends React.Component {
  addItem = event => {
    event.preventDefault()
    this.props.dispatch(handleAddTodo(
      this.input.value,
      () => this.input.value = ''
    ))
  }

  removeItem = todo => {
    this.props.dispatch(handleDeleteTodo(todo))
  }

  toggleItem = id => {
    this.props.dispatch(handleToggle(id))
  }

  render() {
    return (
      <div>
        <h1>Lista de Afazeres</h1>
        <input
          id='todo'
          type='text'
          placeholder='Digite seu afazer'
          ref={input => this.input = input}                
        />
        <button onClick={this.addItem}>Adicionar Afazer</button>
        <List
          toggleItem={this.toggleItem}
          removeItem={this.removeItem}
          items={this.props.todos}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos)