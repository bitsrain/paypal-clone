import React from 'react';
import { Card, Space } from 'antd';
import {
  StarOutlined, StarFilled, StarTwoTone,
  CheckCircleTwoTone, HeartTwoTone, SmileTwoTone,
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';

const Icons = () => (
  <main>
    <Card><h3>Icons 1 (Basic)</h3><Icons1 /></Card>
    <Card><h3>Icons 2 (Two-tone, colorful)</h3><Icons2 /></Card>
    <Card><h3>Icons 3 (Variants)</h3><Icons3 /></Card>
  </main>
);

const Icons1 = () => (
  <Space>
    <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined rotate={180} />
    <LoadingOutlined />
  </Space>
);

const Icons2 = () => (
  <Space>
    <SmileTwoTone />
    <HeartTwoTone twoToneColor="#eb2f96" />
    <CheckCircleTwoTone twoToneColor="#52c41a" />
  </Space>
);

const Icons3 = () => (
  <Space>
    <StarOutlined />
    <StarFilled />
    <StarTwoTone twoToneColor="#eb2f96" />
  </Space>
);

export default Icons;