import {
  LOAD_TRANSACTION, LOAD_TRANSACTION_SUCCESS, LOAD_TRANSACTION_FAIL, CLEAR_TRANSACTION,
  REFUND, REFUND_SUCCESS, REFUND_FAIL, CLEAR_REFUND_STATUS,
} from '../actions/refund_actions';

const cleanTransactionStatus = {
  transaction: null,
  loadingTransaction: false,
  loadTransactionSuccess: false,
};

const cleanRefundStatus = {
  refund: null,
  refunding: false,
  refundSuccess: false,
};

export const initialRefundState = {
  ...cleanTransactionStatus,
  ...cleanRefundStatus,
};

const refundReducer = (state = initialRefundState, { type, payload }) => {
  switch (type) {
    case LOAD_TRANSACTION:
      return {
        ...state,
        ...cleanTransactionStatus,
        loadingTransaction: true,
      };
    case LOAD_TRANSACTION_SUCCESS:
      return {
        ...state,
        loadTransactionSuccess: true,
        transaction: payload,
        loadingTransaction: false,
      };
    case LOAD_TRANSACTION_FAIL:
      return {
        ...state,
        loadingTransaction: false,
      };
    case CLEAR_TRANSACTION:
      return {
        ...state,
        ...cleanTransactionStatus,
      }
    case REFUND:
      return {
        ...state,
        ...cleanRefundStatus,
        refundError: null,
        refunding: true,
      };
    case REFUND_SUCCESS:
      return {
        ...state,
        refundSuccess: true,
        refund: payload.refund,
        refunding: false,
      };
    case REFUND_FAIL:
      return {
        ...state,
        refunding: false,
        refundError: payload,
      };
    case CLEAR_REFUND_STATUS:
      return {
        ...state,
        ...cleanRefundStatus,
      }
    default:
      return state;
  }
};

export default refundReducer;
