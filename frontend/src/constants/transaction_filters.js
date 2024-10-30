export const LAST_90_DAYS = 'last_90_days';
export const LAST_MONTH = 'last_month';
export const THIS_MONTH = 'this_month';
export const LAST_YEAR = 'last_year';
export const THIS_YEAR = 'this_year';

export const DATE_OPTIONS = [
  { value: THIS_MONTH, label: 'This Month' },
  { value: LAST_MONTH, label: 'Last Month' },
  { value: LAST_90_DAYS, label: 'Last 90 days' },
  { value: THIS_YEAR, label: 'This Year' },
  { value: LAST_YEAR, label: 'Last Year' },
];

export const AUTOMATIC_PAYMENTS = 'automatic_payments';
export const PAYMENTS = 'payments';
export const PAYMENTS_RECEIVED = 'payments_received';
export const REFUNDS = 'refunds';
export const TRANSFERS = 'transfers';
export const REPORTED_TRANSACTIONS = 'reported_transactions';

export const TRANSACTION_TYPE_OPTIONS = [
  { label: 'Automatic Payments', value: AUTOMATIC_PAYMENTS },
  { label: 'Payments', value: PAYMENTS },
  { label: 'Payments Received', value: PAYMENTS_RECEIVED },
  { label: 'Refunds', value: REFUNDS },
  { label: 'Transfers', value: TRANSFERS },
  { label: 'Reported Transactions', value: REPORTED_TRANSACTIONS },
];

export const INCOMING_PAYMENTS_TO_REVIEW = 'incoming_payments_to_review';
export const TRACKING_NUMBERS_TO_ADD = 'tracking_numbers_to_add';
export const SHIPPING_LABELS_TO_PRINT = 'shipping_labels_to_print';
export const PAYMENT_REQUESTS_TO_REVIEW = 'payment_requests_to_review';
export const INVOICES_TO_PAY = 'invoices_to_pay';
export const HOLDS = 'holds';

export const STATUS_OPTIONS = [
  { label: 'Incoming payments to review', value: INCOMING_PAYMENTS_TO_REVIEW },
  { label: 'Tracking numbers to add', value: TRACKING_NUMBERS_TO_ADD },
  { label: 'Shipping labels to print', value: SHIPPING_LABELS_TO_PRINT },
  { label: 'Payment requests to review', value: PAYMENT_REQUESTS_TO_REVIEW },
  { label: 'Invoices to pay', value: INVOICES_TO_PAY },
  { label: 'Holds', value: HOLDS },
];





