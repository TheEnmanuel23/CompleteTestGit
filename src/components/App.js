import React, { Component } from 'react';
import Test from './Test';
import './style.scss'
import config from '../config'

class App extends Component {
  constructor () {
    super()
    this.state = { user: null, data: [] }
    this.setUserAvatar = this.setUserAvatar.bind(this)
  }

  setUserAvatar (user) {
    this.setState({user})
  }

  componentDidMount () {
    fetch(config.api).then(res => res.json()).then(({ data }) =>  this.setState({ data }))
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
          <h2>Data</h2>
         <ul>
            {this.state.data.map(d => <li key={d.value}>{d.value}</li>)}
          </ul>
      </div>
    );
  }
}

export default App;
