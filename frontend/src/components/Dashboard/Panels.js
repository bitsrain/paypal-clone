import React from 'react';
import { Button, Dropdown, Menu, List, Avatar } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import QuickActions from './QuickActions';
import './Panels.scss';
import BalanceCard from './BalanceCard';
import RecentActivity from './RecentActivity';
import SendAgain from './SendAgain';
import ExternalLinks from './ExternalLinks';

const Panels = () => {
  return (
    <div className="dashboard-container">
      {/* Left Section */}
      <div className="left-section">
        <BalanceCard />
        <RecentActivity />
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="action-buttons">
          <Button type="primary" size="large">Send</Button>
          <Button type="primary" size="large" ghost>Request</Button>
        </div>
        <QuickActions />
        <SendAgain />
        <ExternalLinks />
      </div>
    </div>
  );
};

export default Panels;
