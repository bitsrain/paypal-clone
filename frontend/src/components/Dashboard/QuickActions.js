import React from 'react';
import { Link } from 'react-router-dom';
import { FileOutlined, BankOutlined, EllipsisOutlined } from '@ant-design/icons';
import './QuickActions.scss';

const QuickActions = () => {
  return (
    <div className="quick-actions">
      <Link to="/invoices/edit" className="quick-action">
        <div className="icon-container">
          <FileOutlined />
        </div>
        <span className="action-text">Create an invoice</span>
      </Link>
      <div className="quick-action">
        <div className="icon-container">
          <BankOutlined />
        </div>
        <span className="action-text">Add card or bank</span>
      </div>
      <div className="quick-action">
        <div className="icon-container">
          <EllipsisOutlined />
        </div>
        <span className="action-text">More</span>
      </div>
    </div>
  );
};

export default QuickActions;
