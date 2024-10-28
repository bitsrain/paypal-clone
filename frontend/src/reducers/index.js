import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import sendReducer from './send_reducer';
import invoiceReducer from "./invoice_reducer";
import refundReducer from "./refund_reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other child reducers here
  send: sendReducer,
  invoice: invoiceReducer,
  refund: refundReducer,
});

export default rootReducer;
