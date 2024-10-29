import React, { useMemo } from 'react';
import moment from 'moment';
import cx from 'classnames';
import { transactionSummary } from '../../../utils/transformers';
import UserAvatar from '../../common/UserAvatar';
import { TYPE_DESC } from '../../../constants/transaction_types';
import './TransactionSummary.scss';

const TransactionSummary = ({ transaction, me }) => {
  const summary = useMemo(() => {
    return transactionSummary(transaction, me);
  }, [transaction, me]);
  const date = useMemo(() => {
    return moment(transaction.createdAt).format('MMMM DD, YYYY');
  }, [transaction]);

  return (
    <div className="transaction-summary">
      <div className="avatar">
        <UserAvatar name={summary.opponent.full_name} />
      </div>
      <div className="info">
        <div className="opponent">{summary.opponent.full_name}</div>
        <div>{date} . {TYPE_DESC[summary.type]}{summary.isRefunded && ' . Refunded'}</div>
        {!!summary.notes && <div className="notes">"{summary.notes}"</div>}
      </div>
      <div className="amount-action">
        <div className={cx("amount", { received: summary.isReceived })}>
          {summary.isReceived ? '+' : '-'}${transaction.amount}
        </div>
      </div>
    </div>
  );
};

export default TransactionSummary;
