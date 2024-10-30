import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Collapse } from 'antd';
import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import { setDraft, updateDraft } from '../../../actions/invoice_actions';
import UserSearchInput from '../../common/UserSearchInput';
import './InvoiceForm.scss';
import InvoiceItems from './InvoiceItems';

const { Panel } = Collapse;

const InvoiceForm = () => {
  const [recipient, setRecipient] = useState();
  const [sellerNote, setSellerNote] = useState();
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateDraft({
        recipient,
        items: items.filter(item => !!item),
        sellerNote,
      })
    );
  }, [recipient, sellerNote, items]);

  const handleNoteChange = useCallback((e) => {
    setSellerNote(e.target.value);
  }, []);

  return (
    <div className="invoice-form">
      {/* Section: Who are you billing? */}
      <div className="form-section">
        <div className="section-header">
          <UserOutlined className="section-icon" />
          <h3>Who are you billing?</h3>
        </div>
        <UserSearchInput onSelect={setRecipient} />
      </div>

      {/* Section: What are they paying for? */}
      <div className="form-section">
        <div className="section-header">
          <ShoppingCartOutlined className="section-icon" />
          <h3>What are they paying for?</h3>
        </div>
        <InvoiceItems onChange={setItems} />
      </div>

      {/* Section: Notes and attachments (Collapsible) */}
      <Collapse defaultActiveKey={['1']} expandIconPosition="right">
        <Panel header="Notes and attachments" key="1">
          <Input.TextArea
            rows={4}
            maxLength={700}
            placeholder="Note to your customer"
            value={sellerNote}
            onChange={handleNoteChange}
            showCount
          />
        </Panel>
      </Collapse>
    </div>
  );
};

export default InvoiceForm;
