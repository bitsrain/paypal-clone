export const SET_DRAFT = 'invoice/set_draft';
export const UPDATE_DRAFT = 'invoice/update_draft';
export const CLEAR_DRAFT = 'invoice/clear_draft';
export const SEND = 'invoice/send';
export const SEND_FAIL = 'invoice/send_fail';
export const SEND_SUCCESS = 'invoice/send_success';
export const CLEAR_SEND_STATUS = 'invoice/clear_send_status';
export const LOAD = 'invoice/load';
export const LOAD_SUCCESS = 'invoice/load_success';
export const LOAD_FAIL = 'invoice/load_fail';
export const PAY = 'invoice/pay';
export const PAY_SUCCESS = 'invoice/pay_success';
export const PAY_FAIL = 'invoice/pay_fail';
export const CLEAR_LOADED = 'invoice/clear_loaded';

export const setDraft = payload => ({
  type: SET_DRAFT,
  payload,
});

export const updateDraft = payload => ({
  type: UPDATE_DRAFT,
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

export const load = (payload) => ({
  type: LOAD,
  payload,
});

export const pay = (payload) => ({
  type: PAY,
  payload,
});

export const clearLoaded = () => ({
  type: CLEAR_LOADED,
});
