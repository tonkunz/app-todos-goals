//"Real World" use of Middleware
const logger = store => next => action => {
  console.group(action.type)
    console.log('Action:', action)
    const result = next(action) //Invoca o dispatch
    console.log('O novo estado', store.getState())
  console.groupEnd()
  return result
}

export default logger