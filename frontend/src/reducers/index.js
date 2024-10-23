import { combineReducers } from "redux";
import authReducer from "./auth_reducer";
import sendReducer from './send_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other child reducers here
  send: sendReducer,
});

export default rootReducer;
