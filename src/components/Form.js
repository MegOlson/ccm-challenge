import React, { Component } from 'react';

class Form extends React.Component {

  state = {
    doctorsFieldsVisible: false,
    facilityFieldsVisible: false
  }

  handleChange = async (e) => {
    e.preventDefault()
    if (e.target.value == "doctor") {
      this.setState({
        doctorsFieldsVisible: true,
        facilityFieldsVisible: false
      });
    } else if (e.target.value == "facility") {
      this.setState({
        doctorsFieldsVisible: false,
        facilityFieldsVisible: true
      });
    } else {
      this.setState({
        doctorsFieldsVisible: false,
        facilityFieldsVisible: false
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.props.getProviders} onChange={this.handleChange}>
        <select name="provider_type">
          <option value="">Provider Type</option>
          <option value="doctor">Doctor</option>
          <option value="facility">Facility</option>
        </select>
        <input type="number" name="zip" placeholder="Zip Code"/>
        { this.state.doctorsFieldsVisible &&
          <span class="doctor-fields">
            <input type="text" name="firstName" placeholder="First Name"/>
            <input type="text" name="lastName" placeholder="Last Name"/>
            <select name="gender">
              <option value="">Gender</option>
              <option value="F">Female</option>
              <option value="M">Male</option>
            </select>
          </span>
        }
        { this.state.facilityFieldsVisible &&
          <span class="facility-fields">
            <input type="text" name="facilityName" placeholder="Facility Name"/>
          </span>
        }
        <button>Get Results</button>
      </form>
    )
  }
}

export default Form;
