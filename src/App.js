import React, { Component } from 'react';
import './App.css';

import Provider from './Provider.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Christian Care Ministries</h1>
        </header>
        <p className="App-intro">
          Search doctors or medical facilities near you.
        </p>
        <Provider providerType="doctor"></Provider>
      </div>
    );
  }
}

export default App;
