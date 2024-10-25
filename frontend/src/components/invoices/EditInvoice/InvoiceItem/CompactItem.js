import React from 'react';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';
import './CompactItem.scss';

const CompactItem = ({ values, onEdit, onDelete }) => {
  if (!values) return null;

  const { type, quantity, price, name, description } = values;

  // Calculate the total based on quantity and rate
  const total = quantity * price;

  return (
    <div className="compact-item">
      {/* Static Fields: Quantity/Hours, Rate/Price per Unit */}
      <div className="compact-fields">
        <div className="field">
          <label>{type === 'goods' ? 'Qty' : 'Hours'}</label>
          <span className="static-text">{quantity}</span>
        </div>

        <div className="field">
          <label>{type === 'goods' ? 'Price per unit' : 'Rate'}</label>
          <span className="static-text">${price.toFixed(2)}</span>
        </div>

        <div className="title">
          {name}
        </div>

        {/* Total Calculation */}
        <div className="total">
          <span className="total-text">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Description and Action Icons on the same line */}
      <div className="description-action-row">
        <div className="description">{description}</div>

        {/* Action Icons (Edit and Delete) */}
        <div className="action-icons">
          <EditOutlined className="icon edit" onClick={onEdit} />
          <CloseOutlined className="icon delete" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default CompactItem;
