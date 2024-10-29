import React, { useMemo, useEffect } from 'react';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadSingle } from '../../../actions/transaction_actions';
import TransactionSummary from './TransactionSummary';
import './index.scss';
import TransactionContent from './TransactionContent';

const TransactionDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const me = useSelector(state => state.auth.profile);
  const transactions = useSelector(state => state.transaction.singles);
  const concern = useMemo(() => {
    return transactions[slug] || {};
  }, [transactions]);

  useEffect(() => {
    if (!concern.loading && !concern.data) {
      dispatch(loadSingle(slug));
    }
  }, [concern]);

  if (!concern.data || !me) {
    return (
      <div className="transaction-detail-page">
        <Spin spinning fullscreen />
      </div>
    );
  }

  return (
    <div className="transaction-detail-page">
      <div className="panel">
        <TransactionSummary transaction={concern.data} me={me} />
        <TransactionContent transaction={concern.data} me={me} />
      </div>
    </div>
  );
};

export default TransactionDetail;
