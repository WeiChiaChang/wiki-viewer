import { delay } from 'redux-saga';
import { take, put, all, call, takeLatest } from 'redux-saga/effects';
import { receiveResults } from '../actions/index.js';
import { REQUEST_SEARCH } from '../constants/action-types';
import _  from 'lodash';
import fetchJsonp from 'fetch-jsonp';
import WIKI_API from '../utils/api';

// 🐹 Helpers
const transformSearchResults = (results) => 
  _.zipWith(
    results[1], results[2], results[3], 
    (title, desc, url) => ({ title, desc, url })
  )

const searchApi = (query) =>  
  fetchJsonp(`${WIKI_API}${query}`)
    .then(response => response.json())
    .then(transformSearchResults)
    .catch((e) => {
      console.log(e)
    });

// function* helloSaga() {
//   console.log('Hello Sagas!')
// }

function* watchAndLog() {
  while (true) {
    const action = yield take('*')
    console.log(action)
  }
}

function* fetchSearchResults({ query }) {
  try {
    // 🙌 debounce
    yield call(delay, 100)
    const results = yield call(searchApi, query);
    yield put(receiveResults(results))
  } catch (err) {
    console.error(err)
  }
}

function* search() {
  yield takeLatest (REQUEST_SEARCH, fetchSearchResults);
}

export default function* rootSaga() {
  yield all([
    // helloSaga(),
    watchAndLog(),
    search(),
  ])
}