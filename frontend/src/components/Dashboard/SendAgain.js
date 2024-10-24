import React from 'react';
import { Avatar, Typography, Dropdown, Menu } from 'antd';
import { EllipsisOutlined, SearchOutlined } from '@ant-design/icons';
import './SendAgain.scss';

const { Text } = Typography;

const sendAgainUsers = [
  { name: 'Josh Budd', avatar: 'JB', color: '#9b59b6' },
  { name: 'filip Ljubinic', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', image: true },
  { name: '101SysCo', avatar: 'store', icon: true },
  { name: 'Anton Gayevoy', avatar: 'https://randomuser.me/api/portraits/men/2.jpg', image: true },
  { name: 'Search', avatar: <SearchOutlined />, color: '#001f3f', icon: true },
];

const menu = (
  <Menu>
    <Menu.Item key="1">Action 1</Menu.Item>
    <Menu.Item key="2">Action 2</Menu.Item>
  </Menu>
);

const SendAgain = () => {
  return (
    <div className="send-again">
      <div className="send-again-header">
        <Text className="send-again-title">Send again</Text>
        <Dropdown overlay={menu} trigger={['click']}>
          <EllipsisOutlined className="menu-icon" />
        </Dropdown>
      </div>
      <div className="send-again-users">
        {sendAgainUsers.map((user, index) => (
          <div key={index} className="send-again-user">
            <Avatar
              size={64}
              style={{ backgroundColor: user.color }}
              src={user.image ? user.avatar : null}
              icon={user.icon ? user.avatar : null}
            >
              {!user.image && !user.icon && user.avatar}
            </Avatar>
            <Text className="user-name">{user.name}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SendAgain;
