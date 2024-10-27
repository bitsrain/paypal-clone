export const SET_DRAFT = 'invoice/set_draft';
export const CLEAR_DRAFT = 'invoice/clear_draft';
export const SEND = 'invoice/send';
export const SEND_FAIL = 'invoice/send_fail';
export const SEND_SUCCESS = 'invoice/send_success';
export const CLEAR_SEND_STATUS = 'invoice/clear_send_status';

export const setDraft = payload => ({
  type: SET_DRAFT,
  payload,
});

export const clearDraft = () => ({
  type: CLEAR_DRAFT,
});

export const send = (payload) => ({
  type: SEND,
  payload,
});

export const clearSendStatus = () => ({
  type: CLEAR_SEND_STATUS,
});
