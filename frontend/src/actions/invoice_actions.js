export const SET_INVOICE = 'invoice/set';
export const CLEAR_INVOICE = 'invoice/clear';

export const setInvoice = payload => ({
  type: SET_INVOICE,
  payload,
});

export const clearInvoice = () => ({
  type: CLEAR_INVOICE,
});
