import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

const Provider = props => (
  <div className="provider-info">

    { props.error &&
      <p className="error-message">
        { props.error }
      </p>
    }

    { props.results && props.results.map(function(response, index){
      return <Collapsible trigger={response.first + " " + response.last}>
        <p className="provider-key"> Location:
          <span className="provider-heading"> {response.city}, {response.state}</span>
        </p>
      </Collapsible>
      })
    }

  </div>
)

export default Provider;
