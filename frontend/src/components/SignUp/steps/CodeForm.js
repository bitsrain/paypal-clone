import React from 'react';
import { Form, Input, Typography } from 'antd';
import './CodeForm.scss';

const { Text, Link } = Typography;
const PSEUDO_CODES = [`111111`, '222222'];

const CodeForm = ({ onSubmit, onResend, phoneNumber }) => {
  const onChange = (code) => {
    if (PSEUDO_CODES.includes(code)) { // todo when SMS is available
      onSubmit(code);
    }
  };

  return (
    <div className="code-form-container">
      <div className="form-title">Confirm your phone</div>
      <div className="form-subtitle">Code sent to {phoneNumber}</div>

      <Link onClick={onResend} className="resend-link">
        Resend code
      </Link>

      <div className="qa-text" type="danger">
        [QA] Enter 222222 (stage) or 111111 (sandbox) below.
      </div>

      <Form onFinish={() => true} className="code-form">
        {/* OTP Input */}
        <Form.Item
          name="code"
          rules={[{ required: true, message: 'Please enter the code' }]}
        >
          <Input.OTP length={6} size="large" className="otp-input" onChange={onChange} />
        </Form.Item>

        <Link href="#" className="call-link">
          Call me with a code
        </Link>
      </Form>
    </div>
  );
};

export default CodeForm;
