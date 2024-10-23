import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Alert } from 'antd';
import { Message, useLocalize } from 'localize-react';
import { login } from '../../utils/auth';
import { authenticate } from '../../actions/auth_actions';
import './LoginForm.scss';

const LoginForm = () => {
  const { translate: tr } = useLocalize();
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (values) => {
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await login(values);
      dispatch(authenticate(res.data.token));
    } catch (err) {
      console.error(err);
      setErrorMessage(tr(`login.msg.${err?.response?.data?.code || 'UNKNOWN'}`));
    } finally {
      setSubmitting(false);
    }
  };

  const onSubmitFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-form-container">
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        onFinishFailed={onSubmitFailed}
        disabled={submitting}
        className="login-form"
      >
        <p role="img" aria-label="PayPal Logo" className="paypal-logo paypal-logo-long"></p>

        {errorMessage && (
          <Alert
            description={errorMessage}
            type="error"
            className="error-alert"
          />
        )}
        
        <Form.Item
          name="email"
          rules={[{ required: true, message: tr('login.msg.email_required') }]}
        >
          <Input placeholder={tr('login.email')} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: tr('login.msg.password_required') }]}
        >
          <Input.Password placeholder={tr('login.password')} />
        </Form.Item>

        <Form.Item>
          <a className="login-form-forgot" href="">
            {tr('login.forgot_password')}
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            {tr('login.submit')}
          </Button>
        </Form.Item>

        <div className="or-separator">or</div>

        <Form.Item>
          <Button type="default" className="signup-form-button">
            {tr('login.sign_up')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
