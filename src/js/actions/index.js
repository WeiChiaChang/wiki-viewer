import { REQUEST_SEARCH, RECEIVE_RESULTS } from '../constants/action-types';

// 💢 Action Creators
export const requestSearch = query => {
  return {
    type: REQUEST_SEARCH,
    query
  }
}

export const receiveResults = results => {
  return {
    type: RECEIVE_RESULTS,
    results
  }
}