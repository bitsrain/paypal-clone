import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { InfoCircleFilled } from '@ant-design/icons';

const RefundsSection = ({ refunds = [], isReceived }) => {
  if (!refunds.length) return null;

  return (
    <div className="section refunds">
      {refunds.map((refund) => (
        <div key={`refund-${refund.id}`} className="refund">
          <InfoCircleFilled style={{ color: 'black', marginRight: 10 }} />
          ${refund.amount} was&nbsp;
          <Link to={`/transactions/v/${refund.transaction_slug}`} target="_blank">
            refunded on {moment(refund.createdAt).format('MMMM DD, YYYY')}
          </Link>
          {isReceived ? '.' : ' to Balance.'}
        </div>
      ))}
    </div>
  )
};

export default React.memo(RefundsSection);
