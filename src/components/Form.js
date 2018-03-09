import React, { Component } from 'react';

const Form = props => (
  <form onSubmit={props.getProviders}>
    <select name="provider_type">
      <option value="">Provider Type</option>
      <option value="doctor">Doctor</option>
      <option value="facility">Facility</option>
    </select>
    <input type="number" name="zip" placeholder="Zip Code"/>
    {"\n"}
    <input type="text" name="firstName" placeholder="First Name"/>
    <input type="text" name="lastName" placeholder="Last Name"/>
    <select name="gender">
      <option value="">Gender</option>
      <option value="F">Female</option>
      <option value="M">Male</option>
    </select>
    <button>Get Results</button>
  </form>
)

export default Form;
