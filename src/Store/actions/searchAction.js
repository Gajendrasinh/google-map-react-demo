/* 
  src/Store/actions/searchAction.js
*/

import { actionType } from '../../contants/action-type';

export const searchAction = (latLng) => dispatch => {
  dispatch(
    {
      type: actionType.SET_LOCATION,
      payload: latLng
    })
}