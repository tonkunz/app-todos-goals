import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

//Action Creators
function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo
  }
}

function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function handleAddTodo (name, resetValue) {
  return dispatch => {
   return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo))
        resetValue()
      })
      .catch(() => {
        alert('Erro ao adicionar, tente novamente!')
      })
  }
}

export function handleDeleteTodo (todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id))

    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodo(todo))
        alert('Um erro ocorreu, tente novamente!')
      }) 
  }
}

export function handleToggle (id) {
  return dispatch => {
    dispatch(toggleTodo(id))

    return API.saveTodoToggle(id)
      .catch(() => {
        dispatch(toggleTodo(id))
        alert('Não foi possível trocar o valor de Complete! Tente novamente mais tarde.')
      })
  }
}