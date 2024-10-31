import React from 'react';
import SendForm from './SendForm';
import './index.scss';
import MoreWaysToSend from './MoreOptions';

const SendPage = () => {
  return (
    <div className="send-page">
      <div className="content">
        <SendForm />
        <MoreWaysToSend />
      </div>
    </div>
  );
};

export default SendPage;
