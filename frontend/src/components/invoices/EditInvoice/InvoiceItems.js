import React, { useState, useEffect, useCallback } from 'react';
import { uniqKeyGen } from '../../../utils/generators';
import InvoiceItem from './InvoiceItem';
import './InvoiceItems.scss';

const mapifyItems = items => {
  const itemsMap = {};
  
  for (let i in items) {
    itemsMap[uniqKeyGen(i)] = items[i];
  }

  return itemsMap;
};

const InvoiceItems = ({ initialItems = [], onChange }) => {
  const [editing, setEditing] = useState(false);
  const [itemsMap, setItemsMap] = useState(mapifyItems(initialItems));

  useEffect(() => {
    onChange(Object.values(itemsMap));
  }, [itemsMap]);

  const handleAddItem = () => {
    setItemsMap(
      {
        ...itemsMap,
        [uniqKeyGen()]: null,
      }
    );
  };

  const handleDeleteItem = useCallback(itemPk => {
    const newItemsMap = { ...itemsMap };
    delete newItemsMap[itemPk];

    setItemsMap(newItemsMap);
  }, [itemsMap]);

  const handleUpdateItem = useCallback((itemPk, item) => {
    setItemsMap(
      {
        ...itemsMap,
        [itemPk]: item,
      }
    );
  }, [itemsMap]);

  if (!Object.keys(itemsMap).length) {
    return (
      <div className="invoice-items">
        <a href="#" onClick={handleAddItem}>+ Add an item</a>
      </div>
    );
  }

  return (
    <div className="invoice-items">
      {Object.keys(itemsMap).map((itemPk) => {
        return (
          <InvoiceItem
            initialValues={itemsMap[itemPk] || undefined}
            key={itemPk}
            onDiscard={() => handleDeleteItem(itemPk)}
            onChange={item => handleUpdateItem(itemPk, item)}
          />
        );
      })}
      <a href="javascript:void(0)" onClick={handleAddItem}>+ Add more items</a>
    </div>
  );
};

export default InvoiceItems;
