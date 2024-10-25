import { SET_INVOICE, CLEAR_INVOICE } from '../actions/invoice_actions';

export const initialInvoiceState = {
  invoice: null,
};

const invoiceReducer = (state = initialInvoiceState, { type, payload }) => {
  switch (type) {
    case SET_INVOICE:
      return {
        ...state,
        invoice: payload,
      };
    case CLEAR_INVOICE:
      return {
        ...state,
        invoice: null,
      };
    default:
      return state;
  }
};

export default invoiceReducer;
