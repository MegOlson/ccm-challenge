import React, { Component } from 'react';
import './App.css';
import Title from './components/Titles';
import Form from './components/Form';
import Provider from './components/Provider';

class App extends React.Component {
  state = {
    city: undefined,
    state: undefined,
    first: undefined,
    error: undefined
  }

  getProviders = async (e) => {
    e.preventDefault();
    const providerType = e.target.elements.provider_type.value;
    const zip = e.target.elements.zip.value;
    const api_call = await fetch(`https://provider-api.ccmnpe.com/search?providerType=${providerType}&zip=${zip}`);
    const data = await api_call.json();
    if (providerType && zip) {
      this.setState({
        city: data.results.map(function(result, index){
          return result.city
        }),
        state: data.results.map(function(result, index){
          return result.state
        }),
        first: data.results.map(function(result, index){
          return result.first
        }),
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        state: undefined,
        first: undefined,
        error: "Please choose a Provider Type and enter your Zip Code."
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-4 title-container">
                  <Title/>
                </div>
                <div className="col-md-7 form-container">
                  <Form getProviders={this.getProviders}/>
                  <Provider
                    city={this.state.city}
                    state={this.state.state}
                    first={this.state.first}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
