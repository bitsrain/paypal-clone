import React, { useState, useCallback } from 'react';
import EditItem from './EditItem';
import CompactItem from './CompactItem';

const InvoiceItem = ({
  initialValues,
  initialMode = 'edit',
  onDiscard,
  onChange,
}) => {
  const [persisted, setPersisted] = useState(!!initialValues);
  const [values, setValues] = useState(initialValues);
  const [mode, setMode] = useState(initialMode);

  const handleSetValues = useCallback((updatedValues) => {
    setValues(updatedValues);
    setPersisted(true);
    setMode('compact');

    onChange(updatedValues);
  }, []);
  const handleCancelEdit = useCallback(() => {
    if (persisted) {
      setMode('compact');
    } else {
      onDiscard();
    }
  }, [persisted]);

  if (mode === 'compact') {
    return (
      <CompactItem
        values={values}
        onEdit={() => setMode('edit')}
        onDelete={onDiscard}
      />
    )
  } else {
    return (
      <EditItem
        initialValues={values}
        onAdd={handleSetValues}
        onCancel={handleCancelEdit}
      />
    )
  }
};

export default InvoiceItem;
