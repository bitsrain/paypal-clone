import { createSelector } from 'reselect';
import { SET_RECIPIENT, SEND } from '../actions/send_actions';

export const initialSendState = {
  recipientEmail: null,
  isSending: false,
};

const sendReducer = (state = initialSendState, action) => {
  switch (action.type) {
    case SET_RECIPIENT:
      return {
        ...state,
        recipientEmail: action.payload,
      };
    case SEND:
      return {
        ...state,
        isSending: true,
      };
    default:
      return state;
  }
};

export default sendReducer;
