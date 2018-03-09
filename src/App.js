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

  changeState = (zip, data, providerType) => {
    if (zip) {
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
  }

  getProviders = async (e) => {
    e.preventDefault();
    const providerType = e.target.elements.provider_type.value;
    const zip = e.target.elements.zip.value;
    if (providerType == "doctor") {
      const firstName = e.target.elements.firstName.value;
      const lastName = e.target.elements.lastName.value;
      const gender = e.target.elements.gender.value;
      const api_call = await fetch(`https://provider-api.ccmnpe.com/search?providerType=${providerType}&zip=${zip}&first=${firstName}&last=${lastName}&gender=${gender}`);
      const data = await api_call.json();
      { this.changeState(zip, data, providerType) }
    } else if (providerType == "facility") {
      const facilityName = e.target.elements.facilityName.value;
      const api_call = await fetch(`https://provider-api.ccmnpe.com/search?providerType=${providerType}&zip=${zip}&facilityName=${facilityName}`);
      const data = await api_call.json();
      { this.changeState(zip, data, providerType) }
    } else if (!providerType) {
      const api_call = await fetch(`https://provider-api.ccmnpe.com/search?providerType=${providerType}&zip=${zip}`);
      const data = await api_call.json();
      { this.changeState(zip, data, providerType) }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-md-5 title-container">
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
    );
  }
}

export default App;
