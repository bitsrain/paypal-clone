import React from 'react';
import { Badge } from 'antd';

const getStatusInfo = (status) => {
  switch (status) {
    case 'pending':
      return { text: 'Pending', color: 'yellow' };
    case 'paid':
      return { text: 'Paid', color: 'green' };
    case 'due':
      return { text: 'Due', color: '#cccccc' };
    default:
      return { text: 'Unknown', color: '#cccccc' };
  }
};

const InvoiceStatusBadge = ({ status }) => {
  const { text, color } = getStatusInfo(status);

  return (
    <Badge color={color} count={text} />
  );
};

export default InvoiceStatusBadge;
