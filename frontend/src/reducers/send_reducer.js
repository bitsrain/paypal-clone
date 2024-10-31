import { createSelector } from 'reselect';
import { SET_RECIPIENT, SEND, SEND_SUCCESS, SEND_FAIL, CLEAR } from '../actions/send_actions';

export const initialSendState = {
  recipient: null,
  success: false,
  sending: false,
  error: null,
};

const sendReducer = (state = initialSendState, { type, payload }) => {
  switch (type) {
    case SET_RECIPIENT:
      return {
        ...state,
        recipient: payload,
      };
    case CLEAR:
      return initialSendState;
    case SEND:
      return {
        ...state,
        sending: true,
        error: null,
        success: false,
      };
    case SEND_SUCCESS:
      return {
        ...state,
        success: true,
        transfer: payload.transfer,
        sending: false,
        error: null,
      };
    case SEND_FAIL:
      return {
        ...state,
        sending: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default sendReducer;
