import { combineReducers } from "redux";

import realestatesReducer from 'redux/realestates/realestatesReducer';
import authReducer from 'redux/auth/authReducer';

const rootReducer = combineReducers({
  realestates: realestatesReducer,
  auth: authReducer
});

export default rootReducer;

