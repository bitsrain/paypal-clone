import React, { useState, useMemo } from 'react';
import TransactionSummary from '../TransactionDetail/TransactionSummary';
import './TransactionItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadSingle } from '../../../actions/transaction_actions';
import TransactionContent from '../TransactionDetail/TransactionContent';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';

const TransactionItem = ({ transaction, me }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const fullTransactions = useSelector(state => state.transaction.singles);
  const concern = useMemo(() => {
    return fullTransactions[transaction.slug] || {};
  }, [fullTransactions]);

  const toggleExpand = () => {
    if (transaction.trigger_type === 'InvoiceNotify') {
      navigate(`/invoices/v/${transaction.trigger_id}`);
      return;
    }

    if (concern.loading) return;

    const newExpanded = !expanded;
    setExpanded(newExpanded);

    if (newExpanded && !concern.loading && !concern.data) {
      dispatch(loadSingle(transaction.slug));
    }
  };

  return (
    <div className="transaction-item">
      <div className="summary-container" onClick={toggleExpand}>
        <TransactionSummary transaction={transaction} me={me} />
      </div>
      {expanded && (
        <div className="content-container">
          {concern.loading && <Spin />}
          {!!concern.data && <TransactionContent transaction={concern.data} me={me} />}
        </div>
      )}
    </div>
  )
};

export default TransactionItem;
