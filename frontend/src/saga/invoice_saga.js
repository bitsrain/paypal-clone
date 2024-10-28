import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
  SEND, SEND_SUCCESS, SEND_FAIL,
  LOAD, LOAD_SUCCESS, LOAD_FAIL,
  PAY, PAY_SUCCESS, PAY_FAIL,
} from '../actions/invoice_actions';
import { invoiceDraftToRequestable } from '../utils/transformers';

function* send({ payload: invoice }) {
  try {
    const response = yield axios.post('/invoices', invoiceDraftToRequestable(invoice));
    yield put({ type: SEND_SUCCESS, payload: response.data });
  } catch (error) {
    console.log('Error', error);
    yield put({ type: SEND_FAIL, payload: error });
  }
}

function* load({ payload: invoiceId }) {
  try {
    const response = yield axios.get(`/invoices/${invoiceId}`);
    yield put({ type: LOAD_SUCCESS, payload: response.data });
  } catch (error) {
    console.log('Error', error);
    yield put({ type: LOAD_FAIL, payload: error });
  }
}

function* pay({ payload: invoiceId }) {
  try {
    const response = yield axios.put(`/invoices/${invoiceId}/pay`);
    yield put({ type: PAY_SUCCESS, payload: response.data });
  } catch (error) {
    console.log('Error', error);
    yield put({ type: PAY_FAIL, payload: error.response?.data?.error || 'Unknown error. Please support contact' });
  }
}

function* invoiceSaga() {
  yield takeLatest(SEND, send);
  yield takeLatest(LOAD, load);
  yield takeLatest(PAY, pay);
}

export default invoiceSaga;
