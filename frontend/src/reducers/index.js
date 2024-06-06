import { combineReducers } from "redux";
import authReducer from "./auth_reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other child reducers here
});

export default rootReducer;
