import React, { Component } from 'react';
import './App.css';
import Title from './components/Titles';
import Form from './components/Form';
import Provider from './components/Provider';

class App extends React.Component {
  getProviders = async (e) => {
    e.preventDefault();
    const providerType = e.target.elements.provider_type.value;
    const zip = e.target.elements.zip.value;
    const api_call = await fetch(`https://provider-api.ccmnpe.com/search?providerType=${providerType}&zip=${zip}`);
    const data = await api_call.json();
    console.log(data);
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
        <Title/>
        <Form getProviders={this.getProviders}/>
        <Provider/>
      </div>
    );
  }
}

export default App;
