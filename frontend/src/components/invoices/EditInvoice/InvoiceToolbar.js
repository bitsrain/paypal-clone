import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined, LeftOutlined } from '@ant-design/icons';
import './InvoiceToolbar.scss';

const InvoiceToolbar = ({ onSend }) => {
  const moreActionsMenu = (
    <Menu>
      <Menu.Item key="1">Share link to invoice</Menu.Item>
      <Menu.Item key="2">Save draft</Menu.Item>
      <Menu.Item key="3">Edit business info</Menu.Item>
      <Menu.Item key="4">Edit or add logo</Menu.Item>
      <Menu.Item key="5">Apply template</Menu.Item>
      <Menu.Item key="6">Save template</Menu.Item>
    </Menu>
  );

  return (
    <div className="invoice-toolbar">
      <div className="invoice-info">
        <Button type="link" className="back-button">
          <LeftOutlined />
        </Button>
        <div className="invoice-details">
          <h2>Invoice No. 0003</h2>
          <span className="invoice-meta">
            Date: 10/24/24 • Due: On receipt{' '}
            <Button type="link" className="edit-link">
              Edit
            </Button>
          </span>
        </div>
      </div>

      <div className="actions">
        <Dropdown overlay={moreActionsMenu} trigger={['click']}>
          <Button type="default" className="more-actions-btn">
            More actions <DownOutlined />
          </Button>
        </Dropdown>
        <Button type="primary" className="send-btn" onClick={onSend}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default InvoiceToolbar;
