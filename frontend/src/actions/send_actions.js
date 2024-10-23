export const SET_RECIPIENT = 'send/set_recipient';
export const SEND = 'send/send';
export const SEND_FAIL = 'send/send_fail';
export const SEND_SUCCESS = 'send/send_success';

export const setRecipient = payload => ({
  type: SET_RECIPIENT,
  payload,
});

export const send = (userId, amount, currency = 'USD', options = {}) => ({
  type: SEND,
  payload: {
    userId,
    amount,
    currency,
    options,
  },
});
