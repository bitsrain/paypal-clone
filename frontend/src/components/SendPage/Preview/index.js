import React, { useState, useEffect } from 'react';
import { Button, Input, Avatar, Typography, Spin } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { send } from '../../../actions/send_actions';
import './index.scss';

const { TextArea } = Input;
const { Text } = Typography;

const Preview = () => {
  const recipient = useSelector(state => state.send.recipientEmail);
  const sending = useSelector(state => state.send.sending);
  const transferSuccess = useSelector(state => state.send.success);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  // Navigate to success page upon successful transfer
  useEffect(() => {
    if (transferSuccess) {
      navigate('/send/success');
    }
  }, [transferSuccess, navigate]);

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

      {sending && <Spin spinning fullscreen />}
    </div>
  );
};

export default Preview;
