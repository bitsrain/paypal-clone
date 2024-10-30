import React, { useState, useCallback, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { SlidersOutlined } from '@ant-design/icons';
import omitBy from 'lodash/omitBy';
import UserSearchInput from '../../../common/UserSearchInput';
import { LAST_90_DAYS } from '../../../../constants/transaction_filters';
import FilterForm from './FilterForm';
import FilterTags from './FilterTags';
import './index.scss';

const parseDateRange = (dateRange) => {
  if (!dateRange) return null;
  return dateRange.map(date => date.format('MM/DD/YYYY'));
};

const TransactionFilters = ({ initialValues, onChange }) => {
  const [filters, setFilters] = useState(initialValues);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    onChange(filters);
  }, [filters]);

  const handleUserSelect = user => {
    setFilters(omitBy({
      ...filters,
      user_id: user?.id,
    }, val => !val));
  };
  const handleFormSubmit = values => {
    const dateRange = parseDateRange(values.dateRange);

    setFilters({
      ...filters,
      ...values,
      dateRange,
    });
    setDrawerOpen(false);
  };
  const handleFilterRemoval = filterKey => {
    const newFilters = { ...filters };
    delete newFilters[filterKey];
    
    // default date option
    if (!newFilters.date && !newFilters.dateRange) {
      newFilters.date = LAST_90_DAYS;
    }

    setFilters(newFilters);
  };

  // UI
  const handleOpenDrawer = useCallback(() => {
    setDrawerOpen(true);
  });
  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
  });

  return (
    <div className="transaction-filters">
      <div className="selectors">
        <div className="user-select">
          <UserSearchInput onSelect={handleUserSelect} showIcon placeholder="Search by name or email" />
        </div>
        <div className="actions">
          <Button
            type="default"
            size="large"
            shape="circle"
            icon={<SlidersOutlined />}
            onClick={handleOpenDrawer}
          />
        </div>
      </div>
      <div className="filter-status">
        <FilterTags filters={filters} onRemove={handleFilterRemoval} />
      </div>
      <Drawer
        title={<div style={{ textAlign: 'center' }}>Filters</div>}
        placement="right"
        width={450}
        open={drawerOpen}
        onClose={handleCloseDrawer}
      >
        {drawerOpen && (
          <FilterForm
            initialValues={filters}
            onSubmit={handleFormSubmit}
          />
        )} 
      </Drawer>
    </div>
  )
};

export default TransactionFilters;
