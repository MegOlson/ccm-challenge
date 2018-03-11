import { combineReducers } from 'redux'
import { doctorFieldsShowing, facilityFieldsShowing } from './formFields';

export default combineReducers({
    doctorFieldsShowing,
    facilityFieldsShowing
});
