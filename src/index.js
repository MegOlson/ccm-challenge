import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

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

// reducer for api call to be used in App.js
/////////////////////////////////////////////////////////
// function apiReducer(state = initialState, action) {
//   switch (action.type) {
//     case "MISSING_DATA":
//       return {
//         results: undefined,
//         errorMessage: data.errorMessage,
//         providerType: undefined
//       };
//     case "SEND_REQUEST":
//       return {
//         results: data.results,
//         errorMessage: data.errorMessage,
//         providerType: providerType
//       };
//     default:
//       return state
//   }
// }
//
// const reducers = combineReducers({
//     forms: formReducer,
//     api: apiReducer
// });
/////////////////////////////////////////////////////////

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
