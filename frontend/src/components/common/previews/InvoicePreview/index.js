import React from 'react';
import { MailFilled } from '@ant-design/icons';
import './index.scss';

const InvoicePreview = ({ invoice }) => {
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
  } = invoice;

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
      <div className="total-amount">${totalAmount.toLocaleString()}</div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="email">
          <MailFilled style={{ marginRight: 10 }} /> {email}
        </div>
      </div>

      {/* Bill To Section */}
      <div className="bill-to-section">
        <h3 className="bill-to-title">Bill to</h3>
        <div className="bill-to">
          <div>{billTo.name}</div>
          <div>{billTo.email}</div>
        </div>
      </div>

      {/* Items Section */}
      <div className="items-section">
        <h3>Items</h3>
        {items.map((item, index) => (
          <div className="item" key={index}>
            <div className="item-header">
              <div className="item-title">{item.title}</div>
              <div className="item-total">${item.total.toLocaleString()}</div>
            </div>
            <div className="item-details">
              {item.quantity} x {item.price.toLocaleString()} <br />
              {item.description}
            </div>
          </div>
        ))}
      </div>

      {/* Subtotal and Total Section */}
      <div className="summary-section">
        <div className="subtotal">
          <span className="label">Subtotal</span>
          <span className="amount">${subtotal.toLocaleString()}</span>
        </div>
        <div className="total">
          <span className="label">Total</span>
          <span className="amount">${total.toLocaleString()}</span>
        </div>
      </div>

      {/* Note Section */}
      <div className="note-section">
        <h3 className="note-title">Seller note to customer</h3>
        <div className="note-content">{note}</div>
      </div>
    </div>
  );
};

export default InvoicePreview;
