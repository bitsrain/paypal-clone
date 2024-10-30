import { INVOICE_PAID, MONEY_RECEIVED, MONEY_SENT, PAID_INVOICE, REFUND_RECEIVED, REFUND_SENT } from "../constants/transaction_types";

export const invoiceDraftToRequestable = (invoice) => {
  const {
    invoiceNumber,
    recipient,
    items,
    sellerNote,
    shipGoods,
  } = invoice;

  return {
    payer_id: recipient.id,
    items: items.map((item) => ({ ...item, unit_price: item.price })),
    notes: sellerNote,
    invoice_number: invoiceNumber || 'INV-0010',
    ship_goods: shipGoods,
  };
};

export const transactionSummary = (transaction, me) => {
  let isReceived, opponent, notes, type, isRefunded;
  
  if (transaction.sender_id === me.id) {
    isReceived = false;
    opponent = transaction.recipient;
  } else {
    isReceived = true;
    opponent = transaction.sender;
  }

  if (transaction.trigger_type !== 'Invoice') {
    notes = transaction.comment;
  }

  switch (transaction.trigger_type) {
    case 'Invoice':
      type = isReceived ? INVOICE_PAID : PAID_INVOICE;
      break;
    case 'Transfer':
      type = isReceived ? MONEY_RECEIVED : MONEY_SENT;
      break;
    case 'Refund':
      type = isReceived ? REFUND_RECEIVED : REFUND_SENT;
      break;
    default:
      type = 'unknown';
  }

  isRefunded = transaction.refunded;

  return {
    opponent,
    notes,
    isReceived,
    isRefunded,
    type,
  };
};

export const selectOptionstoMap = options => {
  const obj = {};
  for (let option of options) {
    obj[option.value] = option.label;
  }

  return obj;
};

// 'DD/MM/YYYY' to 'YYYY-MM-DD'
export const dateRangeToRequestable = dateRange => {
  if (!dateRange) return dateRange;

  return dateRange.map(dateStr => moment(dateStr, 'DD/MM/YYYY').format('YYYY-MM-DD'));
};
