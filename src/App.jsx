import { Component } from 'react'
import './App.css'

export default class App extends Component {
  props = {
    name: 'change test'
  }

  render () {
    return (
      <div className='App'>
        <h1>Welcome to {this.props.name}</h1>
      </div>
    )
  }
}
