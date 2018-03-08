import React, { Component } from 'react';

const Form = props => (
  <form onSubmit={props.getProviders}>
    <input type="text" name="provider_type" placeholder="Provider Type"/>
    <input type="number" name="zip" placeholder="Zip Code"/>
    <button>Get Results</button>
  </form>
)

export default Form;
