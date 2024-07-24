import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { BellOutlined, SettingOutlined } from '@ant-design/icons';
import './index.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <p role="img" aria-label="PayPal Logo" className="paypal-logo paypal-logo-long"></p>
        </Link>
      </div>
      <Menu mode="horizontal" theme="dark" className="left-menu">
        <Menu.Item key="dashboard">
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="finances">
          <Link to="/finances">Finances</Link>
        </Menu.Item>
        <Menu.Item key="send-and-request">
          <Link to="/send-and-request">Send and Request</Link>
        </Menu.Item>
        <Menu.Item key="deals">
          <Link to="/deals">Deals</Link>
        </Menu.Item>
        <Menu.Item key="wallet">
          <Link to="/wallet">Wallet</Link>
        </Menu.Item>
        <Menu.Item key="activity">
          <Link to="/activity">Activity</Link>
        </Menu.Item>
        <Menu.Item key="help">
          <Link to="/help">Help</Link>
        </Menu.Item>
      </Menu>
      <div className="right-menu">
        <Menu mode="horizontal" theme="dark">
          <Menu.Item key="notifications" className="icon-only">
            <Link to="/notifications">
              <BellOutlined />
            </Link>
          </Menu.Item>
          <Menu.Item key="settings" className="icon-only">
            <Link to="/settings">
              <SettingOutlined />
            </Link>
          </Menu.Item>
          <Menu.Item key="logout">
            <Link to="/logout">LOG OUT</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
