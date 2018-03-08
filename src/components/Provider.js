import React, { Component } from 'react';

class Provider extends React.Component {
  render() {
    return (
      <div>
      { this.props.city && this.props.state && <p>Location: {this.props.city}, {this.props.state}</p> }
      { this.props.first && <p>First Name: {this.props.first}</p> }
      { this.props.error && <p>{ this.props.error }</p> }
      </div>
    );
  }
}

export default Provider;
