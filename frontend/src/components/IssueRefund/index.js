import React, { useEffect } from 'react';
import { Form, Input, Button, Typography, InputNumber, Spin, Alert } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { clearTransaction, loadTransaction, refund } from '../../actions/refund_actions';
import './index.scss';
import LinkButton from '../common/LinkButton';

const { Title, Text, Link } = Typography;

const VALIDATION_RULES = {
  amount: [{ required: true, message: 'This field cannot be empty' }],
};

const IssueRefund = () => {
  const { transaction_slug: transactionSlug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const transaction = useSelector(state => state.refund.transaction);
  const loadingTransaction = useSelector(state => state.refund.loadingTransaction);
  const loadTransactionSuccess = useSelector(state => state.refund.loadTransactionSuccess);
  const refunding = useSelector(state => state.refund.refunding);
  const refundSuccess = useSelector(state => state.refund.refundSuccess);
  const refundError = useSelector(state => state.refund.refundError);

  useEffect(() => {
    dispatch(loadTransaction(transactionSlug));
    
    return () => {
      dispatch(clearTransaction());
    };
  }, [transactionSlug]);

  useEffect(() => {
    if (refundSuccess) {
      navigate('/refunds/success');
    }
  }, [refundSuccess]);

  const handleFinish = (values) => {
    console.log('Form submitted:', values);

    dispatch(refund({
      transactionSlug: transaction.slug,
      ...values,
    }));
  };

  if (!loadTransactionSuccess || !transaction) {
    return (
      <div className="issue-refund-container">
        {loadingTransaction && <Spin spinning fullscreen />}
      </div>
    );
  }

  return (
    <div className="issue-refund-container">
      {!!refundError && (
        <Alert type="error" showIcon message={refundError} />
      )}
      {refunding && (
        <Spin spinning fullscreen />
      )}
      <Title level={3}>Issue Refund</Title>
      <Text className="refund-date">Refundable until {moment(transaction.refundable_until).format('MMMM DD, YYYY')}</Text>
      <Link className="refund-link" href="#">
        All about refunds
      </Link>

      <Form layout="vertical" onFinish={handleFinish}>
        
        {/* Contact Info */}
        <div className="info-row">
          <Text className="info-label">Contact info</Text>
          <div>
            <Text>{transaction.sender.full_name}</Text>
            <br />
            <Text>{transaction.sender.email}</Text>
          </div>
        </div>

        {/* Transaction Details */}
        <div className="info-row">
          <Text className="info-label">Transaction Id</Text>
          <Text>{transaction.slug}</Text>
        </div>
        <div className="info-row">
          <Text className="info-label">Original Payment</Text>
          <Text>${transaction.amount}</Text>
        </div>
        <div className="info-row">
          <Text className="info-label">Amount Remaining</Text>
          <Text>${transaction.amount}</Text>
        </div>

        {/* Total Refund Amount */}
        <div className="info-row">
          <Text className="info-label">Total Refund Amount</Text>
          <div>
            <Form.Item name="amount" rules={VALIDATION_RULES.amount}>
              <InputNumber min={0} />
            </Form.Item>
            <Text type="secondary">This is the amount that will be deducted from your PayPal account.</Text>
            <Link className="policy-link" href="#">
              Fee Refund Policy
            </Link>
          </div>
        </div>

        {/* Invoice Number (Optional) */}
        <div className="info-row">
          <Text className="info-label">Invoice Number (Optional)</Text>
          <Form.Item name="invoiceNumber">
            <Input />
          </Form.Item>
        </div>

        {/* Note to Buyer (Optional) */}
        <div className="info-row">
          <Text className="info-label">Note To Buyer (Optional)</Text>
          <Form.Item name="notes">
            <Input.TextArea rows={4} maxLength={200} />
          </Form.Item>
        </div>

        {/* Action Buttons */}
        <div className="button-group">
          <Button type="primary" htmlType="submit">
            Issue Refund
          </Button>
          <LinkButton to={`/transactions/v/${transaction.slug}`}>Cancel</LinkButton>
        </div>
      </Form>
    </div>
  );
};

export default IssueRefund;
