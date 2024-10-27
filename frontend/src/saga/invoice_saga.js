import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { SEND, SEND_SUCCESS, SEND_FAIL } from '../actions/invoice_actions';
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

function* invoiceSaga() {
  yield takeLatest(SEND, send);
}

export default invoiceSaga;
