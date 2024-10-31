import axios from 'axios';
import { all } from 'redux-saga/effects';
import authSaga from './auth_saga';
import sendSaga from './send_saga';
import invoiceSaga from './invoice_saga';
import refundSaga from './refund_saga';
import transactionSaga from './transaction_saga';
import signupSaga from './signup_saga';

axios.defaults.baseURL = process.env.REACT_APP_API_ROOT;

export default function* rootSaga() {
  yield all([
    authSaga(),
    sendSaga(),
    invoiceSaga(),
    refundSaga(),
    transactionSaga(),
    signupSaga(),
  ]);
}
