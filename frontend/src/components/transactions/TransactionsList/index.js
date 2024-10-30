import React from 'react';
import { List, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LAST_90_DAYS } from '../../../constants/transaction_filters';
import { loadList } from '../../../actions/transaction_actions';
import { dateRangeToRequestable } from '../../../utils/transformers';
import TransactionFilters from './Filters';
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
    const requestableFilter = { ...filters };
    if (filters.dateRage) {
      requestableFilter.dateRange = dateRangeToRequestable(filters.dateRange);
    }
  
    dispatch(loadList({ reset: true, filters: requestableFilter }));
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
        {loading && <Spin spinning fullscreen />}
      </div>
    </div>
  );
};

export default TransactionsList;
