import { combineReducers } from "redux";

import realestatesReducer from 'redux/realestates/realestatesReducer'
import realestateReducer from 'redux/realestate/realestateReducer'

export default combineReducers({
  realestates: realestatesReducer,
  realestate: realestateReducer,
});