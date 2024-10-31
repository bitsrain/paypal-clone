import React from 'react';
import { FileTextOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './MoreOptions.scss';

const MoreWaysToSend = () => {
  return (
    <div className="more-ways-to-send">
      <h3>More ways to send</h3>

      <Link className="send-option" to="/invoices/edit">
        <FileTextOutlined className="icon" />
        <div>
          <div className="option-title">Send an invoice</div>
          <div className="option-tagline">Customize, track, and send invoices.</div>
        </div>
      </Link>
    </div>
  );
};

export default MoreWaysToSend;
