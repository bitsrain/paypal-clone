import React from 'react';
import { Modal, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { CopyOutlined, CloseOutlined } from '@ant-design/icons';
import { clearSendStatus } from '../../../actions/invoice_actions';

import './index.scss';
import { generateInvoiceLink } from '../../../utils/generators';


const InvoiceSent = ({ open, invoice, onClose }) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={500}
      closeIcon={<CloseOutlined style={{ fontSize: '18px' }} />}
      centered
    >
      <div className="invoice-sent-modal">
        <div className="icon">
          <img src="/images/invoice-sent.svg" alt="Sent Icon" />
        </div>
        <h2>Your invoice is on its way to your customer</h2>
        <p className="sent-to">Sent to: <span>{invoice?.payer?.email}</span></p>

        <div className="share-section">
          <h3>Share your invoice with a link</h3>
          <div className="share-option">
            <div className="info">
              <CopyOutlined />
              <span>Copy to your clipboard</span>
            </div>
            <Button type="link" onClick={() => navigator.clipboard.writeText(generateInvoiceLink(invoice?.id))}>Copy link</Button>
          </div>
        </div>

        <Button type="primary" onClick={onClose} className="done-button">Done</Button>
      </div>
    </Modal>
  );
};

export default InvoiceSent;
