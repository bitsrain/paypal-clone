import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { setRecipient } from '../../actions/send_actions';
import './SendForm.scss';
import UserSearchInput from '../common/UserSearchInput';

const SendForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [destUser, setDestUser] = useState();
  const handleNext = useCallback(() => {
    dispatch(setRecipient(destUser));
    navigate('/send/preview');
  }, [destUser]);

  return (
    <div className="send-money-container">
      <h3 className="send-money-title">Send money</h3>
      <div className="send-money-input">
        <UserSearchInput onSelect={setDestUser} />
      </div>
      <Button
        type="primary"
        className="send-money-button"
        disabled={!destUser}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

export default SendForm;
