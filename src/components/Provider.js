import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

const Provider = props => (
  <div className="provider-info">

    { props.errorMessage &&
      <p className="error-message">
        { props.errorMessage }
      </p>
    }

    { props.providerType == "doctor" && props.results && props.results.map(function(response, index){
        return <Collapsible trigger={response.first + " " + response.last}>
          <p className="provider-key"> Details:
            <span className="provider-heading"> {response.gender == "F" ? "Female" : "Male"}, {response.specialty}</span>
          </p>
          <p className="provider-key"> Location:
            <span className="provider-heading"> {response.address_line_1} | {response.city}, {response.state}</span>
          </p>
          <p className="provider-key"> Contact:
            <span className="provider-heading"> {response.phone} </span>
          </p>
        </Collapsible>
        })
      }

      { props.providerType == "facility" && props.results && props.results.map(function(response, index){
          return <Collapsible trigger={response.facilityName}>
            <p className="grey-text">Click results to view details.</p>
            <p className="provider-key"> Facility Type:
              <span className="provider-heading"> {response.facilityType}</span>
            </p>
            <p className="provider-key"> Location:
              <span className="provider-heading"> {response.address_line_1} | {response.city}, {response.state}</span>
            </p>
            <p className="provider-key"> Contact:
              <span className="provider-heading"> {response.phone} </span>
            </p>
          </Collapsible>
          })
        }
  </div>
)

export default Provider;
