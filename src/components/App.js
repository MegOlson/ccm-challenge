import React, { Component } from 'react';
import '../App.css';
import { combineReducers, createStore } from 'redux';
import Title from './Titles';
import Form from './Form';
import Response from './Response';
import {connect} from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: undefined,
      errorMessage: undefined,
      providerType: undefined
    };
    this.changeState = this.changeState.bind(this);
    this.getProviders = this.getProviders.bind(this);
  }

  changeState(zip, data, providerType) {
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

  async getProviders(e) {
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
            <Response
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
