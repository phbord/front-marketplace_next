import React from 'react';

import { REALESTATE_SUCCESS, REALESTATE_FAILURE } from './realestateTypes'

const initialState = {
  realestates: null,
  errors: ''
};

const realestatesReducer = (state = initialState, action) => {
  switch(action.type) {
    case REALESTATE_SUCCESS:
      return {
        ...state,
        realestates: action.payload
      }
    case REALESTATE_FAILURE:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state;
  }
};

export default realestatesReducer;