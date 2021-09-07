import { combineReducers } from "redux";

import realestatesReducer from 'redux/realestates/realestatesReducer'
import realestateReducer from 'redux/realestate/realestateReducer'
import authReducer from 'redux/auth/authReducer';

const rootReducer = combineReducers({
  realestates: realestatesReducer,
  realestate: realestateReducer,
  auth: authReducer
});

export default rootReducer;
