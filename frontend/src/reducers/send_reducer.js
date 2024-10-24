import { createSelector } from 'reselect';
import { SET_RECIPIENT, SEND, SEND_SUCCESS, SEND_FAIL } from '../actions/send_actions';

export const initialSendState = {
  recipientEmail: null,
  success: false,
  sending: false,
};

const sendReducer = (state = initialSendState, { type, payload }) => {
  switch (type) {
    case SET_RECIPIENT:
      return {
        ...state,
        recipientEmail: payload,
      };
    case SEND:
      return {
        ...state,
        sending: true,
      };
    case SEND_SUCCESS:
      return {
        ...state,
        success: true,
        transfer: payload.transfer,
        sending: false,
      };
    case SEND_FAIL:
      return {
        ...state,
        sending: false,
      };
    default:
      return state;
  }
};

export default sendReducer;
