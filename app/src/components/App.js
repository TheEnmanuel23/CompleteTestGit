import React, { Component } from 'react';
import Test from './Test';
import './style.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 class="title-course">Test de Introducción a Git</h2>
        </div>
        <p className="App-intro">
          <Test />
        </p>
      </div>
    );
  }
}

export default App;
