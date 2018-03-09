import React, { Component } from 'react';

class Form extends React.Component {
  state = {
    doctorsFieldsVisible: false,
    facilityFieldsVisible: false
  }

  handleChange = (e) => {
    if (e.target.value == "doctor") {
      console.log(e.target.value)
      this.setState({
        doctorsFieldsVisible: true,
        facilityFieldsVisible: false
      });
    } else if (e.target.value == "facility") {
      console.log(e.target.value)
      this.setState({
        doctorsFieldsVisible: false,
        facilityFieldsVisible: true
      });
    } else {
      console.log(e.target.value)
      this.setState({
        doctorsFieldsVisible: false,
        facilityFieldsVisible: false
      });
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
        { this.state.doctorsFieldsVisible &&
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
        { this.state.facilityFieldsVisible &&
          <span className="facility-fields">
            <input type="text" name="facilityName" placeholder="Facility Name"/>
          </span>
        }
        <button>Get Results</button>
      </form>
    )
  }
}

export default Form;
