import React, { Component } from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getProviders}>
          <input type="text" name="provider_type" placeholder="Provider Type"/>
          <input type="number" name="zip" placeholder="Zip Code"/>
          <button>Get Results</button>
        </form>
      </div>
    );
  }
}

export default Form;
