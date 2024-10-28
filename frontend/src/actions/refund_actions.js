export const LOAD_TRANSACTION = 'refund/load_transaction';
export const LOAD_TRANSACTION_SUCCESS = 'refund/load_transaction_success';
export const LOAD_TRANSACTION_FAIL = 'refund/load_transaction_fail';
export const CLEAR_TRANSACTION = 'refund/clear_transaction';
export const REFUND = 'refund/refund';
export const REFUND_SUCCESS = 'refund/refund_success';
export const REFUND_FAIL = 'refund/refund_fail';
export const CLEAR_REFUND_STATUS = 'refund/clear_refund_status';

export const loadTransaction = (payload) => ({
  type: LOAD_TRANSACTION,
  payload,
});

export const clearTransaction = () => ({
  type: CLEAR_TRANSACTION,
});

export const refund = (payload) => ({
  type: REFUND,
  payload,
});

export const clearRefundStatus = () => ({
  type: CLEAR_REFUND_STATUS,
});
