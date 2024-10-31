import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Menu, Skeleton } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import DashboardService from '../../services/dashboard_service';
import './BalanceCard.scss';

const menu = (
  <Menu>
    <Menu.Item key="1">Action 1</Menu.Item>
    <Menu.Item key="2">Action 2</Menu.Item>
    <Menu.Item key="3">Action 3</Menu.Item>
  </Menu>
);

const BalanceCard = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const balanceAmount = await DashboardService.getBalance();
        setBalance(balanceAmount);
      } catch (err) {
        console.log('Error while fetching balance', err);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="balance-card">
      <div className="balance-card-header">
        <span className="balance-title">PayPal balance</span>
        <Dropdown overlay={menu} trigger={['click']}>
          <EllipsisOutlined className="menu-icon" />
        </Dropdown>
      </div>

      <div className="balance-amount">
        {balance === null ? (
          <Skeleton.Input active size="large" />
        ) : (
          <span className="amount">{balance} US$</span>
        )}
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
