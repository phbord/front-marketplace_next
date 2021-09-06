import React from 'react';
import Cookies from 'js-cookie'

import { REALESTATES_SUCCESS, REALESTATES_FAILURE } from './realestatesTypes'

export const findRealestates = (url) => async (dispatch) => {
  const token = Cookies.get('token')

  const config = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` },
  };

  const response = await fetch(`${process.env.API_URL}/${url}`, config);
  const data = await response.json();

  if (data) {
    dispatch({
      type: REALESTATES_SUCCESS,
      payload: data
    })
  }
  else {
    dispatch({
      type: REALESTATES_FAILURE,
      payload: data
    })
  }
};
