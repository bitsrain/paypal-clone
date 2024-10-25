import React from 'react';
import { Input, Collapse } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import UserSearchInput from '../../common/UserSearchInput';
import './InvoiceForm.scss';
import InvoiceItem from './InvoiceItem';
import InvoiceItems from './InvoiceItems';

const { Panel } = Collapse;

const values = {
  type: 'goods', // Can be 'goods' or 'services'
  quantity: 5,
  rate: 50,
  title: "Product development milestone accomplishment",
  description: "Design work and implementation Design work and implementation Design work and implementation"
};

const InvoiceForm = () => {
  return (
    <div className="invoice-form">
      {/* Section: Who are you billing? */}
      <div className="form-section">
        <div className="section-header">
          <UserOutlined className="section-icon" />
          <h3>Who are you billing?</h3>
        </div>
        <UserSearchInput />
      </div>

      {/* Section: What are they paying for? */}
      <div className="form-section">
        <div className="section-header">
          <ShoppingCartOutlined className="section-icon" />
          <h3>What are they paying for?</h3>
        </div>
        <InvoiceItems onChange={() => true} />
      </div>

      {/* Section: Notes and attachments (Collapsible) */}
      <Collapse defaultActiveKey={['1']} expandIconPosition="right">
        <Panel header="Notes and attachments" key="1">
          <Input.TextArea
            rows={4}
            maxLength={700}
            placeholder="Note to your customer"
            showCount
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default InvoiceForm;
