import React, { useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { ArrowLeftOutlined, CloseOutlined } from '@ant-design/icons';
import './PhoneForm.scss';
import CodeForm from './CodeForm';

const PhoneForm = ({ onSubmit, onBack }) => {
  const [codeFormOpen, setCodeFormOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();

  const handleFinish = (values) => {
    setPhoneNumber(values.phone);
    setCodeFormOpen(true);
    // onSubmit(values);
  };

  const handleCloseCodeForm = () => {
    setCodeFormOpen(false);
  };

  const handleCode = (code) => {
    // todo when SMS is available
    setCodeFormOpen(false);
    onSubmit({ phone: phoneNumber });
  };

  return (
    <div className="phone-form-container form-container">
      {/* Top Line with Back Arrow */}
      <div className="form-top-line">
        <ArrowLeftOutlined onClick={onBack} className="back-arrow" />
      </div>

      {/* Logo */}
      <p role="img" aria-label="PayPal Logo" className="paypal-logo paypal-logo-long"></p>

      <div className="form-title">Phone number</div>

      <Form
        name="phone_form"
        layout="vertical"
        onFinish={handleFinish}
        className="phone-form"
      >
        {/* Phone Number Field */}
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please enter your phone number',
            },
            {
              pattern: /^\+?[1-9]\d{1,14}$/,
              message: 'Please enter a valid phone number',
            },
          ]}
        >
          <Input placeholder="e.g. +12523899003" size="large" className="rounded-input" />
        </Form.Item>

        {/* Disclaimer Text */}
        <div className="disclaimer-text">
          By continuing, you confirm that you are authorized to use this phone number and
          agree to receive text messages. Carrier fees may apply.
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="primary-button">
            Next
          </Button>
        </Form.Item>
      </Form>

      <Modal
        open={codeFormOpen}
        onCancel={handleCloseCodeForm} // Close the modal when the close icon is clicked
        closable={true}
        closeIcon={<CloseOutlined />}
        width={500}
        footer={null} // No footer buttons
        maskClosable={false} // Prevents closing on mask click
        keyboard={false} // Prevents closing with ESC
      >
        <CodeForm phoneNumber={phoneNumber} onResend={() => true} onSubmit={handleCode}  />
      </Modal>
    </div>
  );
};

export default PhoneForm;
