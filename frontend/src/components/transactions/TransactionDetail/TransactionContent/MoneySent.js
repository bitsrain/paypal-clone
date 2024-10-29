import React from 'react';
import { Divider } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import RefundsSection from './RefundsSection';

const MoneySent = ({ summary, transaction }) => {
  return (
    <div className="transaction-content">
      <RefundsSection refunds={transaction.refunds} isReceived={false} />
      <div className="section major">
        <div className="major-left">
          <div className="item">
            <div className="label">Paid with</div>
            <div className="field-value">
              <span>Balance</span>
              ${transaction.amount}
            </div>
          </div>
          
          <div className="item">
            <div className="label">Ship to</div>
            <div>
              {transaction.sender.full_name}<br />
              {transaction.sender.address_line_1}<br />
              {transaction.sender.city}<br />
              {transaction.sender.country}<br />
            </div>
          </div>

          <div className="item">
            <div className="label">Transaction ID</div>
            <div>{transaction.slug}</div>
          </div>
        </div>
        <div className="major-right">
          <div className="item">
            <div className="label">Contact info</div>
            <div>{transaction.recipient.full_name}</div>
            <div>
              <a href={`mailto:${transaction.recipient.email}`}>{transaction.recipient.email}</a>
            </div>
          </div>
          {!!transaction.comment && (
            <div className="item">
              <div className="label">Note</div>
              <div>{transaction.comment}</div>
            </div>
          )}
          <div className="item">
            <div className="label">Details</div>
            <div className="field-value">
              <span>Sent to {transaction.recipient.full_name}</span>
              ${transaction.amount}
            </div>
            <Divider />
            <div className="field-value bold">
              <span>Total</span>
              ${transaction.amount}
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <a href="#">
          <PrinterOutlined style={{ marginRight: '5px' }} />
          Print details
        </a>
      </div>
    </div>
  );
};

export default React.memo(MoneySent);
