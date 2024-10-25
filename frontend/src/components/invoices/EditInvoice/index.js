import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearDraft } from '../../../actions/invoice_actions';
import InvoiceToolbar from './InvoiceToolbar';
import InvoiceForm from './InvoiceForm';
import PreviewPanel from './PreviewPanel';
import './index.scss';

const EditInvoicePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearDraft());

    return () => {
      dispatch(clearDraft());
    };
  }, []);

  return (
    <div className="edit-invoice">
      <InvoiceToolbar />
      <div className="content">
        <div className="left-section">
          <InvoiceForm />
        </div>
        <div className="right-section">
          <PreviewPanel />
        </div>
      </div>
    </div>
  );
};

export default EditInvoicePage;
