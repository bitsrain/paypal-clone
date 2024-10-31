import React, { useCallback } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BellOutlined, SettingOutlined } from '@ant-design/icons';
import { logout } from '../../../actions/auth_actions';
import './index.scss';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div className="navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <p role="img" aria-label="PayPal Logo" className="paypal-logo paypal-logo-long inversed"></p>
          </Link>
        </div>
        <Menu mode="horizontal" theme="dark" className="left-menu">
          <Menu.Item key="dashboard">
            <Link to="/dashboard">Home</Link>
          </Menu.Item>
          <Menu.Item key="send-and-request">
            <Link to="/send">Send</Link>
          </Menu.Item>
          <Menu.Item key="wallet">
            <Link to="/wallet">Wallet</Link>
          </Menu.Item>
          <Menu.Item key="activity">
            <Link to="/transactions">Activity</Link>
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
              <Link to="#" onClick={handleLogout}>LOG OUT</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
