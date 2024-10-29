import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_SINGLE, LOAD_SINGLE_SUCCESS, LOAD_SINGLE_FAIL
} from '../actions/transaction_actions';

function* loadSingle({ payload: transactionSlug }) {
  try {
    const response = yield axios.get(`/transactions/${transactionSlug}/full`);
    yield put({ type: LOAD_SINGLE_SUCCESS, payload: response.data });
  } catch (error) {
    console.log('Error', error);
    yield put({ type: LOAD_SINGLE_FAIL, payload: { slug: transactionSlug, error } });
  }
}

function* transactionSaga() {
  yield takeLatest(LOAD_SINGLE, loadSingle);
}

export default transactionSaga;
