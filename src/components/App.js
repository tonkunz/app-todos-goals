//Library dependences
import React from 'react'
import { connect } from 'react-redux'

//Our dependences
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { handleInitialData } from '../actions/shared'

//Styles
import '../styles/App.css'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    if (this.props.loading === true)
      return <h3>Loading...</h3>

    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    )
  }
}

export default connect((state) => ({
  loading : state.loading
}))(App)
