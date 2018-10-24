import { REQUEST_SEARCH, RECEIVE_RESULTS } from '../constants/action-types';

const initialState = {
  query: "",
  result: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SEARCH:
      return Object.assign({}, state, {
        query: action.query
      })
    case RECEIVE_RESULTS:
      return Object.assign({}, state, {
        result: action.results
      })
    default:
      return state
  }
}

export default rootReducer;