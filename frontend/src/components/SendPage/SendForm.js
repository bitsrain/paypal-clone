import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { setRecipient } from '../../actions/send_actions';
import './SendForm.scss';

const SendForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchKey, setSearchKey] = useState('');
  const handleNext = useCallback(() => {
    dispatch(setRecipient(searchKey));
    navigate('/send/preview');
  }, [searchKey]);

  return (
    <div className="send-money-container">
      <h3 className="send-money-title">Send money</h3>
      <div className="send-money-input">
        <Input
          value={searchKey}
          onChange={e => setSearchKey(e.target.value)}
          placeholder="Name, username, email, mobile"
          prefix={<SearchOutlined className="search-icon" />}
        />
      </div>
      <Button
        type="primary"
        className="send-money-button"
        disabled={!searchKey}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

export default SendForm;
