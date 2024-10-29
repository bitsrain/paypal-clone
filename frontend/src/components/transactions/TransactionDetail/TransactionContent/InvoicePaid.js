import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { PrinterOutlined } from '@ant-design/icons';
import RefundsSection from './RefundsSection';

const InvoicePaid = ({ summary, transaction }) => {
  return (
    <div className="transaction-content">
      <RefundsSection refunds={transaction.refunds} isReceived />
      <div className="section major">
        <div className="major-left">
          <div className="item">
            <div className="label">Paid by</div>
            <div>{transaction.sender.full_name}</div>
            <div>
              <a href={`mailto:${transaction.sender.email}`}>{transaction.sender.email}</a>
            </div>
          </div>
          <div className="item">
            <div className="label">Transaction ID</div>
            <div>{transaction.slug}</div>
          </div>
        </div>
        <div className="major-right">
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
            <div className="field-value">
              <span>Purchase total</span>
              <b>${transaction.amount}</b>
            </div>
            <Divider />
            <div className="field-value bold">
              <span>Total</span>
              ${transaction.amount}
            </div>
          </div>
          
          <Link to={`/refunds/t/${transaction.slug}`} className="refund-button">
            Refund this payment
          </Link>
          
          <div>
            <Link to={`/invoices/v/${transaction.trigger_id}`}>
              Show invoice details
            </Link>
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

export default React.memo(InvoicePaid);
