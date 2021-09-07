import React from 'react';

import { REALESTATES_SUCCESS, REALESTATES_FAILURE } from './realestatesTypes'

const initialState = {
  realestates: null,
  errors: ''
};

const realestatesReducer = (state = initialState, action) => {
  switch(action.type) {
    case REALESTATES_SUCCESS:
      return {
        ...state,
        realestates: action.payload
      }
    case REALESTATES_FAILURE:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state;
  }
};

export default realestatesReducer;