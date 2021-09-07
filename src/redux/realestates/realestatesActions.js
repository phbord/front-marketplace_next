import Cookies from 'js-cookie'
import { 
  REALESTATES_SUCCESS, 
  REALESTATES_FAILURE,
  REALESTATE_SUCCESS,
  REALESTATE_FAILURE,
 } from './realestatesTypes'

export const findRealestates = (url) => async (dispatch) => {
  const token = Cookies.get('token')

  const config = {
    method: 'GET',
    //headers: { 'Authorization': `Bearer ${token}` },
  };

  const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`, config);
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

export const findOneRealestates = (url) => async (dispatch) => {
  const token = Cookies.get('token')

  const config = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` },
  };

  const response = await fetch(`${process.env.REACT_APP_API_URL}/${url}`, config);
  const data = await response.json();

  if (data) {
    dispatch({
      type: REALESTATE_SUCCESS,
      payload: data
    })
  }
  else {
    dispatch({
      type: REALESTATE_FAILURE,
      payload: data
    })
  }
};
