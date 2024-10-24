import React from 'react';
import InvoiceToolbar from './InvoiceToolbar';
import InvoiceForm from './InvoiceForm';

const EditInvoicePage = () => {
  return (
    <div className="edit-invoice">
      <InvoiceToolbar />
      <InvoiceForm />
    </div>
  );
};

export default EditInvoicePage;
