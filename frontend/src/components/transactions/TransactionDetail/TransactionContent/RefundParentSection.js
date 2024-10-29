import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { InfoCircleFilled } from '@ant-design/icons';

const RefundParentSection = ({ parent }) => {
  return (
    <div className="section">
      <div className="refund-parent">
        <InfoCircleFilled style={{ color: 'black', marginRight: 10 }} />
        The&nbsp;
        <Link to={`/transactions/v/${parent.slug}`} target="_blank">
          original purchase was on
        </Link>&nbsp;
        {moment(parent.createdAt).format('MMMM DD, YYYY')}.
      </div>
    </div>
  );
};

export default React.memo(RefundParentSection);
