import React, { useEffect } from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadList } from '../../actions/transaction_actions';
import TransactionSummary from '../transactions/TransactionDetail/TransactionSummary';
import './RecentActivity.scss';

const RecentActivity = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transaction.list);
  const loading = useSelector(state => state.transaction.loading);
  const me = useSelector(state => state.auth.profile);

  useEffect(() => {
    dispatch(loadList({ reset: true }));
  }, []);

  const showList = !loading && !!me;

  return (
    <div className="recent-activity">
      <h2 className="activity-title">Recent activity</h2>
      {showList && (
        <List
          itemLayout="horizontal"
          dataSource={transactions}
          renderItem={(transaction) => (
            <List.Item className="activity-item">
              <Link to={transaction.trigger_type === 'InvoiceNotify' ? `/invoices/v/${transaction.trigger_id}` : `/transactions/v/${transaction.slug}`}>
                <TransactionSummary transaction={transaction} me={me} />
              </Link>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default RecentActivity;
