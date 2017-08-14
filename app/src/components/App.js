import React, { Component } from 'react';
import Preguntas from './Preguntas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Test de Introducción a Git</h2>
        </div>
        <p className="App-intro">
          <Preguntas />
        </p>
      </div>
    );
  }
}

export default App;
