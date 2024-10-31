import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { ArrowLeftOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './PasswordForm.scss';

const PasswordForm = ({ onSubmit, onBack }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleFinish = (values) => {
    onSubmit(values);
  };

  return (
    <div className="password-form-container form-container">
      {/* Top Line with Back Arrow */}
      <div className="form-top-line">
        <ArrowLeftOutlined onClick={onBack} className="back-arrow" />
      </div>

      {/* Logo */}
      <p role="img" aria-label="PayPal Logo" className="paypal-logo paypal-logo-long"></p>

      <div className="form-title">Create a password</div>

      <Form
        name="password_form"
        layout="vertical"
        onFinish={handleFinish}
        className="password-form"
      >
        {/* Password Field */}
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter a password',
            },
            {
              min: 8,
              max: 20,
              message: 'Password must be between 8 and 20 characters',
            },
            {
              pattern: /^(?=.*[a-zA-Z])(?=.*\d|.*[!@#$%^&*])/,
              message: 'Password must contain letters and at least one number or symbol',
            },
          ]}
        >
          <Input.Password
            placeholder="Create password"
            size="large"
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            className="rounded-input"
          />
        </Form.Item>

        {/* Password Requirements */}
        <div className="password-requirements disclaimer-text">
          <ul>
            <li>Use 8 to 20 characters</li>
            <li>Use 2 of the following: letters, numbers, or symbols (like !@#$%^)</li>
          </ul>
        </div>

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

export default PasswordForm;
