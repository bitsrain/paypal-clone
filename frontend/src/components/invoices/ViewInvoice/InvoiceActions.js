import React from 'react';
import { Button, Typography } from 'antd';
import { PayCircleOutlined, QrcodeOutlined } from '@ant-design/icons';

import './InvoiceActions.scss';

const { Text, Link } = Typography;

const InvoiceActions = ({ data, onPay, isReceived }) => {
  return (
    <div className="invoice-actions">
      <div className="amount-due">
        <strong>Amount due:</strong>
        <Text className="amount">${data.totalAmount.toFixed(2)}</Text>
      </div>

      <div className="payment-actions">
        <strong>Select payment method:</strong>
        <Button
          className="paypal-button"
          icon={<PayCircleOutlined />}
          disabled={!isReceived}
          onClick={onPay}
        >
          PayPal
        </Button>
        <Button className="venmo-button" icon={<QrcodeOutlined />} disabled>
          venmo
        </Button>
      </div>

      <div className="privacy-statement">
        <Text>
          You understand that your data will be subject to the PayPal&nbsp;
          <Link href="#" target="_blank" rel="noopener noreferrer">
            Privacy Statement
          </Link>.
        </Text>
      </div>
    </div>
  );
};

export default InvoiceActions;
