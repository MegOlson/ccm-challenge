import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

const Provider = props => (
  <div className="provider-info">

    {props.error &&
      <p className="error-message">
        { props.error }
      </p>
    }

    <Collapsible trigger={props.first}>
      {props.city && props.state &&
        <p className="provider-key"> Location:
          <span className="provider-heading"> {props.city}, {props.state}</span>
        </p>
      }
    </Collapsible>

  </div>
)

export default Provider;
