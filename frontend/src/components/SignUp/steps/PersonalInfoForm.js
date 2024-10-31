import React from 'react';
import { Form, Input, Button, Typography, Divider, Alert } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import './PersonalInfoForm.scss';
import { useSelector } from 'react-redux';

const { Link } = Typography;

const PersonalInfoForm = ({ onSubmit, onBack }) => {
  const signingUp = useSelector(state => state.signup.signingUp);
  const signUpError = useSelector(state => state.signup.signUpError);

  const handleFinish = (values) => {
    onSubmit(values);
  };

  return (
    <div className="personal-info-form-container form-container">
      {/* Top Line with Back Arrow */}
      <div className="form-top-line">
        {!signingUp && <ArrowLeftOutlined onClick={onBack} className="back-arrow" />}
      </div>

      {/* Logo */}
      <p role="img" aria-label="PayPal Logo" className="paypal-logo paypal-logo-long"></p>

      <div className="form-title">Personal info</div>

      <Form
        name="personal_info_form"
        layout="vertical"
        onFinish={handleFinish}
        className="personal-info-form"
      >
        {!!signUpError && (
          <Alert type="error" message={signUpError} />
        )}

        {/* First Name */}
        <Form.Item
          label="Legal first name"
          name="first_name"
          required={false}
          rules={[{ required: true, message: 'Please enter your first name' }]}
        >
          <Input placeholder="First name" size="large" className="rounded-input" />
        </Form.Item>

        {/* Last Name */}
        <Form.Item
          label="Legal last name"
          name="last_name"
          required={false}
          rules={[{ required: true, message: 'Please enter your last name' }]}
        >
          <Input placeholder="Last name" size="large" className="rounded-input" />
        </Form.Item>

        {/* Divider between name and address fields */}
        <Divider className="form-divider" />

        {/* Address Line 1 */}
        <Form.Item
          label="Address line 1"
          name="address_line_1"
          required={false}
          rules={[{ required: true, message: 'Please enter your address' }]}
        >
          <Input placeholder="Address line 1" size="large" className="rounded-input" />
        </Form.Item>

        {/* Address Line 2 (Optional) */}
        <Form.Item
          label="Address line 2 (optional)"
          name="address_line_2"
          required={false}
        >
          <Input placeholder="Apt., ste., bldg." size="large" className="rounded-input" />
        </Form.Item>

        {/* City */}
        <Form.Item
          label="City"
          name="city"
          required={false}
          rules={[{ required: true, message: 'Please enter your city' }]}
        >
          <Input placeholder="City" size="large" className="rounded-input" />
        </Form.Item>

        {/* State */}
        <Form.Item
          label="State"
          name="state"
          required={false}
          rules={[{ required: true, message: 'Please enter your state' }]}
        >
          <Input placeholder="State" size="large" className="rounded-input" />
        </Form.Item>

        {/* Agreement and Links */}
        <div className="agreement-text disclaimer-text">
          By creating a PayPal account, you confirm you’re at least 18 years old and agree
          to our <Link href="/e-sign">E-Sign Disclosure and Consent</Link>, <Link href="/user-agreement">User Agreement</Link>, and <Link href="/privacy">Privacy Statement</Link>.
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="primary-button"
            loading={signingUp} // Shows loading indicator when true
            disabled={signingUp} // Disables button when loading
          >
            Agree and Create Account
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalInfoForm;
