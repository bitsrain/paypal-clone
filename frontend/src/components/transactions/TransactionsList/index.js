import React from 'react';
import { List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import TransactionFilters from './Filters';
import { LAST_90_DAYS } from '../../../constants/transaction_filters';
import { loadList } from '../../../actions/transaction_actions';
import TransactionItem from './TransactionItem';
import './index.scss';

const initialFilters = {
  date: LAST_90_DAYS
};

const TransactionsList = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transaction.list);
  const loading = useSelector(state => state.transaction.loading);
  const me = useSelector(state => state.auth.profile);
  const handleFilterChange = (filters) => {
    dispatch(loadList({ reset: true, filters }));
  };

  const showList = !loading && !!me;

  return (
    <div className="transactions-list">
      <div className="content">
        <TransactionFilters initialValues={initialFilters} onChange={handleFilterChange} />
        {showList && (
          <List
            itemLayout="horizontal"
            dataSource={transactions}
            className="list"
            renderItem={(transaction) => (
              <List.Item key={`tr-${transaction.id}`} className="list-item">
                <TransactionItem transaction={transaction} me={me} />
              </List.Item>
            )}
          />
        )}
      </div>
    </div>
  );
};

export default TransactionsList;
