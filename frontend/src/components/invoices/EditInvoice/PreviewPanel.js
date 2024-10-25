import React from 'react';
import InvoicePreview from '../../common/previews/InvoicePreview';

import './PreviewPanel.scss';

const invoiceData = {
  sender: {
    name: 'Jeremy Wang',
    address: '1 Main St',
    city: 'San Jose, CA 95131',
    country: 'UNITED STATES',
  },
  invoiceNumber: '0003',
  issueDate: 'Oct 25, 2024',
  dueDate: 'Oct 25, 2024',
  totalAmount: 25177,
  email: 'jeremy.wang@gmail.com',
  billTo: {
    name: 'John Doe',
    email: 'johndoe.entrepren@outlook.com',
  },
  items: [
    {
      title: 'Web development',
      quantity: 3,
      price: 59,
      total: 177,
      description: `This is not a list, it's multiline text.
      I worked on this project for long.`,
    },
    {
      title: 'Premium Watches',
      quantity: 5,
      price: 5000,
      total: 25000,
      description: 'Here are the watches we delivered to you\nRolex, Orient, Seiko, Omega',
    },
  ],
  subtotal: 25177,
  total: 25177,
  note: `Please pay this invoice the instant you get it.
  I will be waiting for the payment.`,
};

const PreviewPanel = () => {
  return (
    <div className="invoice-preview-panel">
      <InvoicePreview invoice={invoiceData} /> {/* memoize it */}
    </div>
  );  
};

export default PreviewPanel;
