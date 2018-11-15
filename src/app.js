//ReactJS
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Home from './components/layout/home'

//Header
import Header from './components/header'

class App extends Component {

  render(){
    return(
      <div>
        Hello React! How are you?
        <Home />
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
