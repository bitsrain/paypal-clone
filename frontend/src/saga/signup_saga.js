import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
  SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS
} from '../actions/signup_actions';

function* signUp({ payload: values }) {
  try {
    const response = yield axios.post('/auth/signup', values);
    yield put({ type: SIGN_UP_SUCCESS, payload: response.data });
  } catch (error) {
    console.log('Error', error);
    yield put({ type: SIGN_UP_FAIL, payload: error.response?.data?.message || 'Unknown error. Please support contact' });
  }
}

function* signupSaga() {
  yield takeLatest(SIGN_UP, signUp);
}

export default signupSaga;
