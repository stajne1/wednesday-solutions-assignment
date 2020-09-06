import { put, takeEvery, all, call } from 'redux-saga/effects';
import actions from './actions'

function* fetchSongs(action) {
  try {
    const url = `https://itunes.apple.com/search?term=${action.payload}`;
    const response = yield call(fetch, url);
    const data = yield response.json();
    yield put(actions.fetchSuccess(data.results));
  } catch (error) {
    yield put(actions.fetchFailure(error));
  }
}

function* fetchSongsSaga() {
  yield takeEvery('FETCH_SONGS', fetchSongs);
}

export default function* rootSaga() {
  yield all([
    fetchSongsSaga()
  ])
}