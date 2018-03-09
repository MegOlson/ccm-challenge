import React, { Component } from 'react';
import './App.css';
import Title from './components/Titles';
import Form from './components/Form';
import Provider from './components/Provider';

class App extends React.Component {
  state = {
    results: undefined,
    errorMessage: undefined,
    providerType: undefined
  }

  getProviders = async (e) => {
    e.preventDefault();
    const providerType = e.target.elements.provider_type.value;
    const zip = e.target.elements.zip.value;
    const api_call = await fetch(`https://provider-api.ccmnpe.com/search?providerType=${providerType}&zip=${zip}`);
    const data = await api_call.json();
    if (providerType && zip) {
      this.setState({
        results: data.results,
        errorMessage: data.errorMessage,
        providerType: providerType
      });
    } else {
      this.setState({
        results: undefined,
        errorMessage: data.errorMessage,
        providerType: undefined
      });
    }
    console.log(api_call.status);

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
                    results={this.state.results}
                    errorMessage={this.state.errorMessage}
                    providerType={this.state.providerType}
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
