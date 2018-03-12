import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    e.preventDefault();
    if (e.target.value == "doctor") {
      this.props.dispatch({ type: "DOCTOR_FIELDS_AVAILABLE" });
    } else if (e.target.value == "facility") {
      this.props.dispatch({ type: "FACILITY_FIELDS_AVAILABLE" });
    } else {
      this.props.dispatch({ type: "BASIC_FIELDS_AVAILABLE" });
    }
  }

  render() {
    return (
      <form onSubmit={this.props.getProviders} >
        <select name="provider_type" onChange={this.handleChange}>
          <option value="">Provider Type</option>
          <option value="doctor">Doctor</option>
          <option value="facility">Facility</option>
        </select>
        <input type="number" name="zip" placeholder="Zip Code"/>
        { this.props.doctorsFieldsVisible &&
          <span className="doctor-fields">
            <input type="text" name="firstName" placeholder="First Name"/>
            <input type="text" name="lastName" placeholder="Last Name"/>
            <select name="gender">
              <option value="">Gender</option>
              <option value="F">Female</option>
              <option value="M">Male</option>
            </select>
          </span>
        }
        { this.props.facilityFieldsVisible &&
          <span className="facility-fields">
            <input type="text" name="facilityName" placeholder="Facility Name"/>
          </span>
        }
        <button>Get Results</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    doctorsFieldsVisible: state.doctorsFieldsVisible,
    facilityFieldsVisible: state.facilityFieldsVisible
  }
}

export default connect(mapStateToProps)(Form);
