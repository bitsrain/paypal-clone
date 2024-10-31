import React from 'react';
import axios from 'axios';
import { MailFilled, DownloadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import './index.scss';
import InvoiceStatusBadge from '../../badges/InvoiceStatusBadge';

const { Link } = Typography;

const InvoicePreview = ({ invoice, showStatus = false }) => {
  const {
    sender,
    invoiceNumber,
    issueDate,
    dueDate,
    totalAmount,
    email,
    billTo,
    items,
    subtotal,
    total,
    note,
    status,
    attachments,
  } = invoice;

  const hasAttachments = !!attachments && attachments.length > 0;

  return (
    <div className="invoice-preview">
      {/* Sender and Invoice Info */}
      <div className="header">
        <div className="sender-info">
          <h3 className="name">{sender.name}</h3>
          <div>{sender.address}</div>
          <div>{sender.city}</div>
          <div>{sender.country}</div>
        </div>
        <div className="invoice-info">
          <div className="invoice-number">Invoice #{invoiceNumber}</div>
          <div className="issued">Issued: {issueDate}</div>
          <div className="due">Due: {dueDate}</div>
        </div>
      </div>

      {/* Total Amount */}
      <div className="total-amount">${totalAmount.toFixed(2)}</div>

      {showStatus && <div className="invoice-status"><InvoiceStatusBadge status={status} /></div>}

      {/* Contact Info */}
      <div className="contact-info">
        <div className="email">
          <MailFilled style={{ marginRight: 10 }} /> {email}
        </div>
      </div>

      {/* Bill To Section */}
      {!!billTo && (
        <div className="bill-to-section">
          <h3 className="bill-to-title">Bill to</h3>
          <div className="bill-to">
            <div>{billTo.name}</div>
            <div>{billTo.email}</div>
          </div>
        </div>
      )}

      {/* Items Section */}
      <div className="items-section">
        <h3>Items</h3>
        {items.map((item, index) => (
          <div className="item" key={index}>
            <div className="item-header">
              <div className="item-title">{item.name}</div>
              <div className="item-total">${item.total.toFixed(2)}</div>
            </div>
            <div className="item-details">
              {item.quantity} x {item.price} <br />
              {item.description}
            </div>
          </div>
        ))}
      </div>

      {/* Subtotal and Total Section */}
      <div className="summary-section">
        <div className="subtotal">
          <span className="label">Subtotal</span>
          <span className="amount">${subtotal.toFixed(2)}</span>
        </div>
        <div className="total">
          <span className="label">Total</span>
          <span className="amount">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Note Section */}
      {!!note && (
        <div className="note-section">
          <h3 className="note-title">Seller note to customer</h3>
          <div className="note-content">{note}</div>
        </div>
      )}

      {hasAttachments && (
        <div className="attachments-section">
          <h3 className="attachments-title">Attachments ({attachments.length})</h3>
          <div className="attachments-content">
            {attachments.map((attachment) => (
              <div key={attachment.name} className="attachment-item">
                <DownloadOutlined className="download-icon" />
                <Link href={`${axios.defaults.baseURL}${attachment.url}`} target="_blank" download>
                  {attachment.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoicePreview;
