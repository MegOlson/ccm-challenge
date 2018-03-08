import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

const Provider = props => (
  <div className="provider-info">

    {props.error &&
      <p className="error-message">
        { props.error }
      </p>
    }

    { props.response && props.response.map(function(response, index){
        return
        <p key={ index }>
          {response.first}
        </p>;
      })
    }

  </div>
)

export default Provider;
