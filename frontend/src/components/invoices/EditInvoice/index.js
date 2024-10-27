import React, { useEffect, useCallback } from 'react';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { clearDraft, send, clearSendStatus } from '../../../actions/invoice_actions';
import InvoiceToolbar from './InvoiceToolbar';
import InvoiceForm from './InvoiceForm';
import PreviewPanel from './PreviewPanel';
import InvoiceSent from '../InvoiceSent';
import './index.scss';

const EditInvoicePage = () => {
  const dispatch = useDispatch();
  const draft = useSelector(state => state.invoice.draft);
  const sentInvoice = useSelector(state => state.invoice.sentInvoice);
  const sending = useSelector(state => state.invoice.sending);
  const sendSuccess = useSelector(state => state.invoice.success);

  useEffect(() => {
    dispatch(clearDraft());

    return () => {
      dispatch(clearDraft());
    };
  }, []);

  const handleSend = () => {
    dispatch(send(draft));
  };

  const concludeSend = () => {
    dispatch(clearSendStatus());
  };

  return (
    <div className="edit-invoice">
      <InvoiceToolbar onSend={handleSend} />
      <div className="content">
        <div className="left-section">
          <InvoiceForm />
        </div>
        <div className="right-section">
          <PreviewPanel />
        </div>
      </div>
      <InvoiceSent open={sendSuccess} invoice={sentInvoice} onClose={concludeSend} />
      {sending && <Spin spinning fullscreen />}
    </div>
  );
};

export default EditInvoicePage;
