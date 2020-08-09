import React from 'react';
import { Button, Layout, Form, DatePicker, Input, Checkbox } from 'antd';
import logo from '../../../assets/logo.svg';

import './styles.css';

const { Content } = Layout;
const { useForm } = Form;

const LoginForm = (props) => {
  const [form] = useForm();

  return (
    <Content className="loginFormContainer">
      <img src={logo} id="logo" alt="logo" />
      <h1 className="title">SIGN UP</h1>
      <Form
        className="form"
        form={form}
        name="Register"
        onFinish={props.onRegister}
       >
        <Form.Item
          name="username"
          rules={[{
            required: true
          }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="date"
          rules={[{
            required: true
          }]}
        >
          <DatePicker
            className="datePicker"
            format="MM/DD/YYYY"
            placeholder="Date of Birth"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            () => ({
              validator(rule, value) {
                // valid if is empty
                if (!value || value.length === 0) {
                  return Promise.reject('Email is required');
                }
                // valid if value is an email
                if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
                  return Promise.resolve();
                }
                return Promise.reject('It should be a correct email');
              },
            }),
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{
            required: true
          }]}
        >
          <Input placeholder="Password" />
        </Form.Item>

        <Form.Item
          className="policy"
          name="terms"
          valuePropName="checked"
          rules={[{
            required: true
          }]}
        >
          <Checkbox>
            <span className="policyText">
              By signing up you agree to our 
              <span className="underline">Termins of Service </span> 
              and 
              <span className="underline"> Privacy Policy</span>
            </span>
          </Checkbox>
        </Form.Item>

        <Button type="primary" htmlType="submit" className="submitBtn">
          Submit
        </Button>

        <p className="textToLogin">Already a member <span className="underline">Login In</span></p>
      </Form>
    </Content>
  );
}

export default LoginForm;