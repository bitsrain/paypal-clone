import { combineReducers } from "redux";
import { LOGOUT } from "../actions/auth_actions";
import { deleteSession } from "../utils/auth";
import authReducer, { unauthenticatedState } from "./auth_reducer";
import sendReducer from './send_reducer';
import invoiceReducer from "./invoice_reducer";
import refundReducer from "./refund_reducer";
import transactionReducer from "./transaction_reducer";

const appReducer = combineReducers({
  auth: authReducer,
  // Add other child reducers here
  send: sendReducer,
  invoice: invoiceReducer,
  refund: refundReducer,
  transaction: transactionReducer,
});

// Root reducer with LOGOUT action handling
const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    deleteSession();
    // Reset the state to undefined, causing all reducers to reset to their initial state
    state = {
      auth: unauthenticatedState,
    };
  }

  return appReducer(state, action);
};

export default rootReducer;
