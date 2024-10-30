import React from 'react';
import TransactionFilters from './Filters';
import { LAST_90_DAYS } from '../../../constants/transaction_filters';
import './index.scss';

const initialFilters = {
  date: LAST_90_DAYS
};

const TransactionsList = () => {
  const handleFilterChange = (filters) => {
    console.log(filters);
  };

  return (
    <div className="transactions-list">
      <div className="content">
        <TransactionFilters initialValues={initialFilters} onChange={handleFilterChange} />
      </div>
    </div>
  );
};

export default TransactionsList;
