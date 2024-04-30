import React from 'react'
import './App.css'
import Title from './Title'

type StateType = {
  showNumber: boolean,
}

class App extends React.Component<object, StateType> {

  state = {
    showNumber: false,
  }

  handleclick = () => {
    this.setState((prevState) => ({ showNumber: !prevState.showNumber }))
  };

  render() {
    return (
      <>
        <button onClick={ this.handleclick }>{ this.state.showNumber ? 'hide' : 'show' }</button>
        { this.state.showNumber ? <Title /> : <h1>?</h1> }
      </>
    )
  }

}

export default App
