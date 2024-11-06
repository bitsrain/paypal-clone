import React from 'react';
import { FloatButton, Card } from 'antd';
import './FloatButtons.scss';

const FloatButtons = () => (
  <div className="float-buttons">
    <Card><h3>1</h3><FloatButtons1 /></Card>
  </div>
);

const FloatButtons1 = () => <FloatButton onClick={() => console.log('onClick')} />;

export default FloatButtons;
