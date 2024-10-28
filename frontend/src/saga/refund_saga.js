import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_TRANSACTION, LOAD_TRANSACTION_SUCCESS, LOAD_TRANSACTION_FAIL,
  REFUND, REFUND_SUCCESS, REFUND_FAIL,
} from '../actions/refund_actions';

function* loadTransaction({ payload: transactionId }) {
  try {
    const response = yield axios.get(`/transactions/${transactionId}`);
    yield put({ type: LOAD_TRANSACTION_SUCCESS, payload: response.data });
  } catch (error) {
    console.log('Error', error);
    yield put({ type: LOAD_TRANSACTION_FAIL, payload: error });
  }
}

function* refund({ payload }) {
  const {
    transactionSlug,
    amount,
    invoiceNumber,
    notes,
  } = payload;

  try {
    const response = yield axios.put(`/transactions/${transactionSlug}/refund`, {
      amount,
      invoice_number: invoiceNumber,
      notes,
    });
    yield put({ type: REFUND_SUCCESS, payload: response.data });
  } catch (error) {
    console.log('Error', error);
    yield put({ type: REFUND_FAIL, payload: error.response?.data?.error || 'Unknown error. Please support contact' });
  }
}

function* refundSaga() {
  yield takeLatest(LOAD_TRANSACTION, loadTransaction);
  yield takeLatest(REFUND, refund);
}

export default refundSaga;
