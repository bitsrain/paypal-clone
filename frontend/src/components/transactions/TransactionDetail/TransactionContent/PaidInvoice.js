import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import RefundsSection from './RefundsSection';

const PaidInvoice = ({ summary, transaction }) => {
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
            <div className="label">Transaction ID</div>
            <div>{transaction.slug}</div>
          </div>
        </div>
        <div className="major-right">
          <div className="item">
            <div className="label">Seller info</div>
            <div>{transaction.recipient.full_name}</div>
            <div>
              <a href={`mailto:${transaction.recipient.email}`}>{transaction.recipient.email}</a>
            </div>
          </div>
          <div className="item">
            <div className="label">Purchase details</div>
            {transaction.invoice.invoice_items.map(item => {
              const itemTotal = item.quantity * item.unit_price;
              return (
                <div key={`item-${item.id}`} className="field-value invoice-item">
                  <div>
                    {item.name}<br />
                    {item.description}
                  </div>
                  ${itemTotal.toFixed(2)}
                </div>
              );
            })}
            <div className="field-value">
              <span>Amount</span>
              <b>${transaction.amount}</b>
            </div>
            <Divider />
            <div className="field-value bold">
              <span>Total</span>
              ${transaction.amount}
            </div>
          </div>

          <Link to={`/invoices/v/${transaction.trigger_id}`}>
            Show invoice details
          </Link>
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

export default React.memo(PaidInvoice);
