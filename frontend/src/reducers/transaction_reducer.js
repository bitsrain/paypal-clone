import {
  LOAD_SINGLE, LOAD_SINGLE_SUCCESS, LOAD_SINGLE_FAIL,
  LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_FAIL,
} from '../actions/transaction_actions';

export const initialTransactionState = {
  singles: {}, // full details
  list: [],
  loading: false,
};

const transactionReducer = (state = initialTransactionState, { type, payload }) => {
  switch (type) {
    case LOAD_LIST:
      return {
        ...state,
        loading: true,
      };
    case LOAD_LIST_SUCCESS:
      const { reset, transactions } = payload;
      return {
        ...state,
        list: reset ? transactions : [...state.list, ...transactions],
        loading: false,
      };
    case LOAD_LIST_FAIL:
      return {
        ...state,
        loading: false,
      };
    case LOAD_SINGLE:
      const slug = payload;
      return {
        ...state,
        singles: {
          ...state.singles,
          [slug]: { // payload - slug
            loading: true,
            data: null,
          },
        },
      };
    case LOAD_SINGLE_SUCCESS:
      const fullTransaction = payload;
      return {
        ...state,
        singles: {
          ...state.singles,
          [fullTransaction.slug]: { // payload - transaction full body
            loading: false,
            data: fullTransaction,
          },
        },
      };
    case LOAD_SINGLE_FAIL:
      return {
        ...state,
        singles: {
          ...state.singles,
          [payload.slug]: {
            loading: false,
            data: null,
          },
        },
      };
    default:
      return state;
  }
};

export default transactionReducer;
