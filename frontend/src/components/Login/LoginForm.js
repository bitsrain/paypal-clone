// LoginForm.jsx
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './LoginForm.scss';

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login-form-container">
            <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="login-form"
            >
              <p role="img" aria-label="PayPal Logo" class="paypal-logo paypal-logo-long"></p>
              <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Please input your email or mobile number!' }]}
              >
                  <Input placeholder="Email or mobile number" />
              </Form.Item>

              <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
              >
                  <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                  <a className="login-form-forgot" href="">
                      Forgot password?
                  </a>
              </Form.Item>

              <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                      Log In
                  </Button>
              </Form.Item>

              <div className="or-separator">or</div>

              <Form.Item>
                  <Button type="default" className="signup-form-button">
                      Sign Up
                  </Button>
              </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
