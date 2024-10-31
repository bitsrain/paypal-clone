import { createSelector } from 'reselect';
import moment from 'moment';
import {
  SET_DRAFT, UPDATE_DRAFT, CLEAR_DRAFT,
  SEND, SEND_SUCCESS, SEND_FAIL, CLEAR_SEND_STATUS,
  LOAD, LOAD_SUCCESS, LOAD_FAIL,
  PAY, PAY_SUCCESS, PAY_FAIL,
  CLEAR_LOADED,
} from '../actions/invoice_actions';

const cleanLoadedStatus = {
  loadedInvoice: null,
  loading: false,
  loadSuccess: false,
  paying: false,
  payError: null,
  paySuccess: false,
};

export const initialInvoiceState = {
  draft: null,
  sentInvoice: null,
  sending: false,
  sendSuccess: false,
  ...cleanLoadedStatus,
};

const invoiceReducer = (state = initialInvoiceState, { type, payload }) => {
  switch (type) {
    case SET_DRAFT:
      return {
        ...state,
        draft: payload,
      };
    case UPDATE_DRAFT:
      return {
        ...state,
        draft: !!state.draft ? { ...state.draft, ...payload } : payload,
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
        sendSuccess: true,
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
    case LOAD:
      return {
        ...state,
        ...cleanLoadedStatus,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loadSuccess: true,
        loadedInvoice: payload,
        loading: false,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
      };
    case PAY:
      return {
        ...state,
        paying: true,
        payError: null,
        paySuccess: false,
      };
    case PAY_SUCCESS:
      return {
        ...state,
        loadedInvoice: {
          ...state.loadedInvoice,
          ...payload.invoice,
        },
        paying: false,
        paySuccess: true,
      };
    case PAY_FAIL:
      return {
        ...state,
        paying: false,
        payError: payload,
      };
    case CLEAR_LOADED:
      return {
        ...state,
        ...cleanLoadedStatus,
      }
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
    const { recipient, items, sellerNote, invoiceNumber, dueDate, attachments } = invoiceDraft || { items: [] };
    const previewData = {
      attachments,
    };

    previewData.sender = {
      name: sender.full_name,
      address: sender.address_line_1,
      city: sender.city,
      country: 'United Kingdom',
    };
    previewData.email = sender.email;

    previewData.invoiceNumber = invoiceNumber; // todo
    previewData.issueDate = moment().format('MMM D, YYYY'); // todo
    previewData.dueDate = dueDate ? moment(dueDate, 'DD/MM/YY').format('MMM D, YYYY') : 'On receipt'; // todo

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

export const selectLoadedPreviewData = createSelector(
  [
    state => state.auth.profile,
    state => state.invoice.loadedInvoice,
  ],
  (me, invoice) => {
    if (!invoice) return null;
    const { user, payer, invoice_items: items, final_status: status, updatedAt, paid_at: paidAt, attachments } = invoice;
    const previewData = {
      status,
      updatedAt,
      paidAt,
      attachments,
    };

    previewData.sender = {
      name: user.full_name,
      address: user.address_line_1,
      city: user.city,
      country: 'United Kingdom',
    };
    previewData.email = user.email;
    previewData.billTo = {
      name: payer.full_name,
      email: payer.email,
    };
    previewData.invoiceNumber = invoice.invoice_number;
    previewData.issueDate = moment(invoice.issue_date).format('MMM D, YYYY');
    previewData.dueDate = invoice.due_date ? moment(invoice.due_date).format('MMM D, YYYY') : 'On receipt';
    previewData.note = invoice.notes;

    previewData.totalAmount = items.length ?
      items.reduce((total, item) => total + item.quantity * item.unit_price, 0) :
      0;
    previewData.total = previewData.totalAmount; // todo
    previewData.subtotal = previewData.totalAmount; // todo

    previewData.items = items.map(item => ({
      ...item,
      price: item.unit_price,
      total: item.quantity * item.unit_price,
    }));

    return previewData;
  }
);

export const selectLoadedCompositeStatus = createSelector(
  [
    state => state.auth.profile,
    state => state.invoice.loadedInvoice,
  ],
  (me, invoice) => {
    if (!invoice) return [null, null, null];

    const isReceived = invoice.payer_id === me.id;

    return [
      invoice.id,
      invoice.status,
      invoice.final_status,
      isReceived,
    ];
  }
);
