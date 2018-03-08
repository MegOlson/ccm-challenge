import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

const Provider = props => (
  <div className="provider-info">
    {props.first &&
      <p className="provider-key">First Name:
        <span className="provider-heading"> {props.first}</span>
      </p>}

    {props.city && props.state &&
      <p className="provider-key"> Location:
        <span className="provider-heading"> {props.city}, {props.state}</span>
      </p>}

    {props.error &&
      <p className="error-message">
        { props.error }
      </p>}

    <Collapsible trigger="Start here">
      <p>This is the collapsible content. It can be any element or React component you like.</p>
      <p>It can even be another Collapsible component. Check out the next section!</p>
    </Collapsible>

  </div>
)

export default Provider;
