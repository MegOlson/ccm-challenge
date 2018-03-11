export function doctorFieldsShowing(bool) {
    return {
        type: 'DOCTOR_FIELDS_SHOWING',
        doctorsFieldsVisible: bool
    };
}
export function facilityFieldsShowing(bool) {
    return {
        type: 'FACILITY_FIELDS_SHOWING',
        facilityFieldsVisible: bool
    };
}

export function handleChange(e) {
    e.preventDefault();
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
