import React from 'react';
import moment from 'moment';
import './InvoiceTrack.scss';

const InvoiceTrack = ({ data: invoice }) => {
  return (
    <div className="invoice-track">
      {/* Last Updated Section */}
      <div className="invoice-track-section">
        <div className="updated-at">
          Last updated on <strong>{moment(invoice.updatedAt).format('MMMM DD, YYYY [at] hh:mm:ss A z')}</strong>
        </div>
      </div>

      {/* Amount Due Section */}
      <div className="invoice-track-section">
        <div className="section-title">
          <strong>Amount due:</strong>
          <span className="amount">$0.00</span>
        </div>
        <div className="section-list">
          <div className="section-listitem">
            Original invoice total
            <span>${invoice.totalAmount.toFixed(2)}</span>
          </div>
          <div className="section-listitem">
            Total amount paid
            <span>${invoice.totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Payment Activity Section */}
      <div className="invoice-track-section">
        <div className="section-title"><strong>Payment activity</strong></div>
        <div className="section-list">
          <div className="section-listitem">
            Payment - {moment(invoice.paidAt).format('MM/DD/YYYY')}
            <span>${invoice.totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTrack;
