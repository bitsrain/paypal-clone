import { createSelector } from 'reselect';
import { SET_DRAFT, CLEAR_DRAFT, SEND, SEND_SUCCESS, SEND_FAIL, CLEAR_SEND_STATUS } from '../actions/invoice_actions';

export const initialInvoiceState = {
  draft: null,
  sentInvoice: null,
  sending: false,
  sendSuccess: false,
};

const invoiceReducer = (state = initialInvoiceState, { type, payload }) => {
  switch (type) {
    case SET_DRAFT:
      return {
        ...state,
        draft: payload,
      };
    case CLEAR_DRAFT:
      return {
        ...state,
        draft: null,
      };
    case SEND:
      return {
        ...state,
        sending: true,
      };
    case SEND_SUCCESS:
      return {
        ...state,
        success: true,
        sentInvoice: payload.invoice,
        sending: false,
      };
    case SEND_FAIL:
      return {
        ...state,
        sending: false,
      };
    case CLEAR_SEND_STATUS:
      return initialInvoiceState;
    default:
      return state;
  }
};

export default invoiceReducer;

export const selectDraftPreviewData = createSelector(
  [
    state => state.auth.profile,
    state => state.invoice.draft,
  ],
  (sender, invoiceDraft) => {
    const { recipient, items, sellerNote } = invoiceDraft || { items: [] };
    const previewData = {};

    previewData.sender = {
      name: sender.full_name,
      address: sender.address_line_1,
      city: sender.city,
      country: 'United Kingdom',
    };
    previewData.email = sender.email;

    previewData.invoiceNumber = '00005'; // todo
    previewData.issueDate = '2024/10/4'; // todo
    previewData.dueDate = '2024/10/6'; // todo

    previewData.totalAmount = items.length ?
      items.reduce((total, item) => total + item.quantity * item.price, 0) :
      0;
    previewData.total = previewData.totalAmount; // todo
    previewData.subtotal = previewData.totalAmount; // todo
    
    if (recipient) {
      previewData.billTo = {
        name: recipient.full_name,
        email: recipient.email,
      };
    }

    previewData.note = sellerNote;

    previewData.items = items.map(item => ({
      ...item,
      total: item.quantity * item.price,
    }));

    return previewData;
  }
);
