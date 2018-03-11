export function doctorFieldsShowing(state = false, action) {
  switch (action.type) {
    case 'DOCTOR_FIELDS_SHOWING':
    return doctorsFieldsVisible.action;
    default:
      return state;
  }
}

export function facilityFieldsShowing(state = false, action) {
  switch (action.type) {
    case 'FACILTIY_FIELDS_SHOWING':
    return facilitysFieldsVisible.action;
    default:
      return state;
  }
}
