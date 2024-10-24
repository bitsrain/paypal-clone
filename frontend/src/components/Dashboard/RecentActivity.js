import React from 'react';
import { List, Avatar, Typography } from 'antd';
import './RecentActivity.scss';

const { Text } = Typography;

const recentActivities = [
  {
    id: 1,
    name: 'Gal Doron',
    date: '20 Oct',
    description: 'Money Received',
    amount: '+$420.00 USD',
    type: 'credit',
    avatar: 'GD',
  },
  {
    id: 2,
    name: 'Upwork Escrow Inc.',
    date: '17 Oct',
    description: 'Automatic Payment',
    amount: '-$36.00 USD',
    type: 'debit',
    avatar: 'UP',
  },
  {
    id: 3,
    name: 'Mingli Zhao',
    date: '16 Oct',
    description: 'Invoice paid',
    amount: '-$470.00 USD',
    type: 'debit',
    avatar: 'MZ',
  },
  {
    id: 4,
    name: 'Kehinde Williams',
    date: '15 Oct',
    description: 'Money Received',
    amount: '+$472.75 USD',
    type: 'credit',
    avatar: 'KW',
  },
];

const RecentActivity = () => {
  return (
    <div className="recent-activity">
      <h2 className="activity-title">Recent activity</h2>
      <List
        itemLayout="horizontal"
        dataSource={recentActivities}
        renderItem={(activity) => (
          <List.Item className="activity-item">
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: '#52c41a' }}>{activity.avatar}</Avatar>}
              title={<Text className="activity-name">{activity.name}</Text>}
              description={
                <>
                  <Text className="activity-date">{activity.date}</Text>
                  <br />
                  <Text className="activity-description">{activity.description}</Text>
                </>
              }
            />
            <Text className={`activity-amount ${activity.type === 'credit' ? 'credit' : 'debit'}`}>
              {activity.amount}
            </Text>
          </List.Item>
        )}
      />
    </div>
  );
};

export default RecentActivity;
