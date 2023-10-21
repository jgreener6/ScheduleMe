import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

type SignInProps = {
  onLogin?: (userData: {username: string, password: string}) => void;
};

const SignIn: React.FC<SignInProps> = ({ onLogin }) => {
  const onFinish = (values: any) => {
    if (onLogin) {
      onLogin(values);
    }
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
