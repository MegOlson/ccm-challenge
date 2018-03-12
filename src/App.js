import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import Title from './components/Titles';
import Form from './components/Form';
import Response from './components/Response';

const initialState = {
  forms: {
    doctorsFieldsVisible: false,
    facilityFieldsVisible: false
  },
  api: {
    results: undefined,
    errorMessage: undefined,
    providerType: undefined
  }
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case "FACILITY_FIELDS_AVAILABLE":
      return {
        facilityFieldsVisible: true
      };
    case "DOCTOR_FIELDS_AVAILABLE":
      return {
        doctorsFieldsVisible: true
      };
    case "BASIC_FIELDS_AVAILABLE":
      return {
        doctorsFieldsVisible: false,
        facilityFieldsVisible: false
      };
    default:
      return state
  }
}

const store = createStore(reducers);

store.dispatch({ type: "DOCTOR_FIELDS_AVAILABLE" });
store.dispatch({ type: "FACILITY_FIELDS_AVAILABLE" });
store.dispatch({ type: "BASIC_FIELDS_AVAILABLE" });
store.dispatch({ type: "SUBMIT_REQUEST" });
store.dispatch({ type: "MISSING_DATA" });

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
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
