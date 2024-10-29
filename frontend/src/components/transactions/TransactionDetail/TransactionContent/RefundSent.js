import React from 'react';
import { Divider } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import RefundParentSection from './RefundParentSection';

const RefundSent = ({ summary, transaction }) => {
  return (
    <div className="transaction-content">
      <RefundParentSection parent={transaction.refund_parent} />
      <div className="section major">
        <div className="major-left">
          <div className="item">
            <div className="label">Funded with</div>
            <div className="field-value">
              <span>Balance</span>
              ${transaction.amount}
            </div>
          </div>
          
          <div className="item">
            <div className="label">Refunded to</div>
            <div>{transaction.recipient.full_name}</div>
            <div>
              <a href={`mailto:${transaction.recipient.email}`}>{transaction.recipient.email}</a>
            </div>
          </div>

          <div className="item">
            <div className="label">Transaction ID</div>
            <div>{transaction.slug}</div>
          </div>
        </div>
        <div className="major-right">
          {!!transaction.comment && (
            <div className="item">
              <div className="label">Note</div>
              <div>{transaction.comment}</div>
            </div>
          )}
          <div className="item">
            <div className="label">Refund details</div>
            <div className="field-value">
              <span>Total refunded to {transaction.recipient.full_name}</span>
              ${transaction.amount}
            </div>
            <Divider />
            <div className="field-value bold">
              <span>Total paid by you</span>
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

export default React.memo(RefundSent);
