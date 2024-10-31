import React from 'react';
import { Form, Input, Button } from 'antd';
import './EmailForm.scss';
import { Link } from 'react-router-dom';

const EmailForm = ({ onSubmit }) => {
  const handleFinish = (values) => {
    onSubmit(values);
  };

  return (
    <div className="email-form-container form-container">
      {/* Top Line with Login Link */}
      <div className="form-top-line">
        <Link to="/login" className="login-link">Log In</Link>
      </div>

      {/* Logo */}
      <p role="img" aria-label="PayPal Logo" className="paypal-logo paypal-logo-long"></p>

      <div className="form-title">
        Sign up for PayPal
      </div>

      <Form
        name="email_form"
        layout="vertical"
        onFinish={handleFinish}
        className="email-form"
      >
        {/* Email Field */}
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email address',
            },
            {
              type: 'email',
              message: 'Please enter a valid email address',
            },
          ]}
        >
          <Input placeholder="Your email" size="large" className="rounded-input" />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit" className="primary-button">
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EmailForm;
