import React, { Component } from 'react';

const Provider = props => (
  <div>
    { props.city && props.state && <p>Location: {props.city}, {props.state}</p> }
    { props.first && <p>First Name: {props.first}</p> }
    { props.error && <p>{ props.error }</p> }
  </div>
)

export default Provider;
