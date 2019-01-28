import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

function addGoal (goal) {
  return {
    type: ADD_GOAL,
    goal
  }
}

function removeGoal (id) {
  return {
    type: REMOVE_GOAL,
    id
  }
}

export function handleAddGoal (name, resetValue) {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal))
        resetValue()
      })
      .catch(() => alert('Erro ao adicionar meta, tente novamente!'))
  }
}

export function handleDeleteGoal (goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id))

    return API.deleteGoal(goal.id)
      .catch(() => {
        dispatch(addGoal(goal))
        alert('Não foi possível excluir o afazer na base de dados. Por favor, tente novamente mais tarde!')
      })
  }
}