import axios from 'axios';
import { put, takeLatest } from "redux-saga/effects";
import { SEND, SEND_SUCCESS, SEND_FAIL } from '../actions/send_actions';

function* send({ payload }) {
  const {
    userId,
    amount,
    currency,
    options,
  } = payload;

  try {
    const response = yield axios.post('/transfers', {
      dest_id: userId,
      amount,
      currency,
      message: options?.message,
    });
    yield put({ type: SEND_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: SEND_FAIL, payload: error.response?.data?.error || 'Unknown error. Please support contact' });
  }
}

function* sendSaga() {
  yield takeLatest(SEND, send);
}

export default sendSaga;
