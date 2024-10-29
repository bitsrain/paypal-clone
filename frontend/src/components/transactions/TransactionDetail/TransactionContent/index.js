import React, { useMemo } from 'react';
import { transactionSummary } from '../../../../utils/transformers';
import { INVOICE_PAID, MONEY_RECEIVED, MONEY_SENT, PAID_INVOICE, REFUND_RECEIVED, REFUND_SENT } from '../../../../constants/transaction_types';
import MoneySent from './MoneySent';
import MoneyReceived from './MoneyReceived';
import RefundSent from './RefundSent';
import RefundReceived from './RefundReceived';
import PaidInvoice from './PaidInvoice';
import InvoicePaid from './InvoicePaid';
import './index.scss';

const TransactionContent = ({ transaction, me }) => {
  const summary = useMemo(() => {
    return transactionSummary(transaction, me);
  }, [transaction, me]);

  switch (summary.type) {
    case MONEY_SENT:
      return (
        <MoneySent summary={summary} transaction={transaction} />
      );
    case MONEY_RECEIVED:
      return (
        <MoneyReceived summary={summary} transaction={transaction} />
      );
    case REFUND_SENT:
      return (
        <RefundSent summary={summary} transaction={transaction} />
      );
    case REFUND_RECEIVED:
      return (
        <RefundReceived summary={summary} transaction={transaction} />
      );
    case PAID_INVOICE:
      return (
        <PaidInvoice summary={summary} transaction={transaction} />
      );
    case INVOICE_PAID:
      return (
        <InvoicePaid summary={summary} transaction={transaction} />
      );
    default:
      return null;
  }
};

export default TransactionContent;
