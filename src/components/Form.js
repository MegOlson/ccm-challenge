import React, { Component } from 'react';

const Form = props => (
  <form onSubmit={props.getProviders}>
    <select name="provider_type">
      <option value="doctor">Doctor</option>
      <option value="facility">Facility</option>
    </select>
    <input type="number" name="zip" placeholder="Zip Code" maxLength="5" minLength="5"/>
    <button>Get Results</button>
  </form>
)

export default Form;
