import React, { Component } from 'react';

const Provider = props => (
  <div className="provider-info">
    {props.city && props.state &&
      <p className="provider-key"> Location:
        <span className="provider-heading"> {props.city}, {props.state}</span>
      </p>}

    {props.first &&
      <p className="provider-key">First Name:
        <span className="provider-heading"> {props.first}</span>
      </p>}

    {props.error &&
      <p className="error-message">
        { props.error }
      </p>}

  </div>
)

export default Provider;
