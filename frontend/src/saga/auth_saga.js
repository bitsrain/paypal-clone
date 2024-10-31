import axios from 'axios';
import { put, takeLatest } from "redux-saga/effects";
import { LOAD_PROFILE_REQUEST, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_FAILURE } from '../actions/auth_actions';

function* loadProfile() {
  try {
    const response = yield axios.get("/profile");
    yield put({ type: LOAD_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: LOAD_PROFILE_FAILURE, payload: error });
  }
}

function* authSaga() {
  yield takeLatest(LOAD_PROFILE_REQUEST, loadProfile);
}

export default authSaga;
