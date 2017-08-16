import React, { Component } from 'react';
import Test from './Test';
import './style.scss'

class App extends Component {
  constructor () {
    super()
    this.state = { user: null }
    this.setUserAvatar = this.setUserAvatar.bind(this)
  }

  setUserAvatar (user) {
    this.setState({user})
  }

  render() {
    return (
      <div className="App ">
        <div className="App-header">
          <h2 class="title-course">Test de Introducción a Git</h2>
        </div>
        <p className="App-intro card-panel test-component">
          {this.state.user 
            ? <img src={this.state.user.photoURL} alt={this.state.user.displayName} style={{ 'margin-bottom': '15px', 'height': '100px', 'border-radius': '50%' }} />
            : ''
          }
          <Test setUserAvatar={this.setUserAvatar} />
        </p>
      </div>
    );
  }
}

export default App;
