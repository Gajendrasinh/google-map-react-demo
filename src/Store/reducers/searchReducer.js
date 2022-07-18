/* 
  src/Store/reducers/searchReducer.js
*/
// import { actionType } from './../../contants/action-type'

let searchReducer = (state = {}, action) => {
    switch (action.type) {
        case "SET_LOCATION":
            return {
                ...state,
                location: action.payload
            }
        case "GET_LOCATION":
            return {
                ...state,
                location: state.location
            }
        default:
            return state
    }
}
export default searchReducer;