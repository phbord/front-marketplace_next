import { combineReducers } from "redux";

import realestatesReducer from 'redux/realestates/realestatesReducer'

export default combineReducers({
  realestates: realestatesReducer,
});