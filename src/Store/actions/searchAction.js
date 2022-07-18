/* 
  src/Store/actions/searchAction.js
*/
export const searchAction = (latLng) => dispatch => {
    dispatch(
        {
            type: 'SEARCH_PLACE_ACTION',
            payload: latLng
        })
}