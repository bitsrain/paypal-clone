import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { setSession, deleteSession } from "../utils/auth";
import rootReducer from "../reducers";
import { authenticatedState, unauthenticatedState } from "../reducers/auth_reducer";
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const token = localStorage.getItem('token');
let initialState = {};

if (token) {
  setSession(token);
  initialState = {
    auth: authenticatedState,
  };
} else {
  deleteSession();
  initialState = {
    auth: unauthenticatedState,
  };
}

const store = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(rootReducer, initialState);

sagaMiddleware.run(rootSaga);

export default store;
