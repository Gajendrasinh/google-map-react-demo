/* 
  src/Store/reducers/searchReducer.js
*/

let searchReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SEARCH_PLACE_ACTION':
            return {
                result: action.payload
            }
        default:
            return state
    }
}
export default searchReducer;