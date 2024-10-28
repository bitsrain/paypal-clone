import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { clearRefundStatus } from '../../actions/refund_actions';
import './RefundSuccess.scss';

const { Title, Text, Link } = Typography;

const RefundSuccess = () => {
  const dispatch = useDispatch();
  const refund = useSelector(state => state.refund.refund);

  useEffect(() => {
    return () => {
      dispatch(clearRefundStatus());
    };
  }, [dispatch]);

  return (
    <div className="refund-success-container">
      <CheckCircleOutlined className="refund-success-icon" />
      <Title level={3}>${refund.amount} refunded to {refund.recipient.full_name}</Title>
      <Text className="refund-details">
        Refund details have been emailed to the buyer.
      </Text>
      <div className="refund-links">
        <Link href="#">View Original Transaction</Link> |{' '}
        <Link href="#">View Refunded Transaction</Link>
      </div>
    </div>
  );
};

export default RefundSuccess;
