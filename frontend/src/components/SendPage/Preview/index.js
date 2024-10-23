import React, { useState } from 'react';
import { Button, Input, Avatar, Typography, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { send } from '../../../actions/send_actions';
import './index.scss';

const { TextArea } = Input;
const { Text } = Typography;

const Preview = () => {
  const recipient = useSelector(state => state.send.recipientEmail);
  const isSending = useSelector(state => state.send.isSending);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState('0.00');
  const [message, setMessage] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleNext = () => {
    dispatch(
      send(6, parseFloat(amount), 'USD', { message })
    );
  };

  return (
    <div className="send-money-form">
      {/* User Info Section */}
      <div className="user-info">
        <Avatar size={50} style={{ backgroundColor: '#f23f5f' }}>JW</Avatar>
        <div className="details">
          <Typography.Title level={4} style={{ margin: 0 }}>
            Jeremy Wang
          </Typography.Title>
          <Text type="secondary" className="email-text">
            {recipient}
          </Text>
        </div>
      </div>

      {/* Amount Input with Ant Design's prefix */}
      <div className="amount-input-wrapper">
        <Input
          type="number"
          min={0}
          value={amount}
          onChange={handleAmountChange}
          className="amount-input"
          prefix="$"
          size="large"
          style={{ width: 150 }}
        />
        <span className="currency-indicator">USD</span>
      </div>

      {/* Comment Input */}
      <TextArea
        placeholder="What's this for?"
        value={message}
        onChange={handleMessageChange}
        rows={3}
        className="message-input"
      />

      {/* Action Buttons */}
      <div className="actions">
        <Button
          type="primary"
          size="large"
          disabled={parseFloat(amount) <= 0}
          className="next-btn"
          onClick={handleNext}
        >
          Next
        </Button>
        <Button
          type="link"
          className="cancel-btn"
        >
          Cancel
        </Button>
      </div>

      {isSending && <Spin spinning fullscreen />}
    </div>
  );
};

export default Preview;
