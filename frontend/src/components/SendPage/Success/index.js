import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const { Text } = Typography;

const Success = () => {
  const navigate = useNavigate();

  // Get the values from the Redux store
  const transfer = useSelector((state) => state.send.transfer);
  const recipient = useSelector((state) => state.send.recipient);

  const handleSendMore = () => {
    navigate('/send-money'); // Update with correct path
  };

  const handleGoToSummary = () => {
    navigate('/summary'); // Update with correct path
  };

  return (
    <div className="success-message-container">
      <div className="message-box">
        <Text className="success-text">
          You've sent {transfer?.amount} {transfer?.currency} to {recipient?.full_name}
        </Text>
      </div>
      <div className="button-group">
        <Button
          type="primary"
          size="large"
          className="send-more-button"
          onClick={handleSendMore}
        >
          Send More Money
        </Button>
        <Button
          type="link"
          className="summary-button"
          onClick={handleGoToSummary}
        >
          Go to Summary
        </Button>
      </div>
    </div>
  );
};

export default Success;
