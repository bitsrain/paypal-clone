import React from 'react';
import InvoiceToolbar from './InvoiceToolbar';
import InvoiceForm from './InvoiceForm';
import PreviewPanel from './PreviewPanel';
import './index.scss';

const EditInvoicePage = () => {
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
