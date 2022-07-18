/* 
  src/Store/actions/searchAction.js
*/

import { actionType } from '../../contants/action-type';
const axios = require('axios').default;

export const searchAction = (address) => {
  return async function (dispatch, getState) {
    const response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyCkIJMa0XbMx0pTYyEFg5n-3U6onIiG0fc")
    dispatch(
      {
        type: actionType.SET_LOCATION,
        payload: response.data.results[0].geometry.location
      })
  }
}