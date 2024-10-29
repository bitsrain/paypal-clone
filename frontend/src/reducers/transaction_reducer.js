import {
  LOAD_SINGLE, LOAD_SINGLE_SUCCESS, LOAD_SINGLE_FAIL
} from '../actions/transaction_actions';

export const initialTransactionState = {
  singles: {}, // full details
  list: [] 
};

const transactionReducer = (state = initialTransactionState, { type, payload }) => {
  switch (type) {
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
