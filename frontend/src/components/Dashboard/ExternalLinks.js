import React from 'react';
import { Typography, Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import './ExternalLinks.scss';

const { Text, Link } = Typography;

const menu = (
  <Menu>
    <Menu.Item key="1">Action 1</Menu.Item>
    <Menu.Item key="2">Action 2</Menu.Item>
  </Menu>
);

// Example list of cards or external links
const externalLinks = [
  {
    name: 'Payoneer Card',
    type: 'Credit ••••65',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Payoneer_Logo.svg/2560px-Payoneer_Logo.svg.png',
  },
  {
    name: 'Visa Card',
    type: 'Credit ••••45',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
  },
];

const ExternalLinks = () => {
  return (
    <div className="external-links">
      <div className="links-header">
        <Text className="links-title">Banks and cards</Text>
        <Dropdown overlay={menu} trigger={['click']}>
          <EllipsisOutlined className="menu-icon" />
        </Dropdown>
      </div>
      {externalLinks.map((link, index) => (
        <div key={index} className="link-info">
          <img src={link.imgUrl} alt={link.name} className="link-image" />
          <div className="link-details">
            <Text className="link-name">{link.name}</Text>
            <Text className="link-type">{link.type}</Text>
          </div>
        </div>
      ))}
      <Link href="#" className="add-link">
        Link a Card or Bank
      </Link>
    </div>
  );
};

export default ExternalLinks;
