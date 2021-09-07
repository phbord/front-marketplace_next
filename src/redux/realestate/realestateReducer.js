import React from 'react';

import { REALESTATE_SUCCESS, REALESTATE_FAILURE } from './realestateTypes'

const initialState = {
  realestate: null,
  errors: ''
};

const realestateReducer = (state = initialState, action) => {
  switch(action.type) {
    case REALESTATE_SUCCESS:
      return {
        ...state,
        realestate: action.payload
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

export default realestateReducer;
