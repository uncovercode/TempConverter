import React, { Component } from 'react';
import './App.css';
import TempConverter from './components/TempConverter';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Conversão de Temperatura</h2>
        <TempConverter />
      </div>
    );
  }
}

export default App;
