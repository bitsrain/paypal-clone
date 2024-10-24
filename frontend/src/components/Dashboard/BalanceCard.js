import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import './BalanceCard.scss';

const BalanceCard = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">Action 1</Menu.Item>
      <Menu.Item key="2">Action 2</Menu.Item>
      <Menu.Item key="3">Action 3</Menu.Item>
    </Menu>
  );

  return (
    <div className="balance-card">
      <div className="balance-card-header">
        <span className="balance-title">PayPal balance</span>
        <Dropdown overlay={menu} trigger={['click']}>
          <EllipsisOutlined className="menu-icon" />
        </Dropdown>
      </div>

      <div className="balance-amount">
        <span className="amount">420.00 US$</span>
      </div>

      <div className="balance-status">
        <span>Available</span>
      </div>

      <div className="balance-action">
        <Button type="primary" shape="round" size="large">
          Transfer Funds
        </Button>
      </div>
    </div>
  );
};

export default BalanceCard;
