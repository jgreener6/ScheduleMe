import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Radio, Select, DatePicker } from 'antd';

const { TextArea } = Input;

const JobPostingForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values:', values);
    // Add logic to handle form submission here
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Job Type" name="jobType" rules={[{ required: true, message: 'Please input the Job Type!' }]}>
      <Select>
          <Select.Option value="Wedding">Wedding</Select.Option>
          <Select.Option value="Engagment">Engagement</Select.Option>
         
        </Select>
      </Form.Item>
      <Form.Item label="Position" name="position" rules={[{ required: true, message: 'Please input the Position!' }]}>
      <Select>
          <Select.Option value="Videographer">Videographer</Select.Option>
          <Select.Option value="Photographer">Photographer</Select.Option>
          <Select.Option value="DJ">DJ</Select.Option>
          <Select.Option value="PhotoBooth">PhotoBooth</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Location" name="location" rules={[{ required: true, message: 'Please input the Location!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Hours" name="hours" rules={[{ required: true, message: 'Please input the Hours!' }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Pay" name="pay" rules={[{ required: true, message: 'Please input the Pay!' }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please select a Date!' }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <TextArea rows={4} />
      </Form.Item>
      
      <Form.Item label="Category" name="category">
        <Select>
          <Select.Option value="Lead">Lead</Select.Option>
          <Select.Option value="Second-Shooter">Second Shooter</Select.Option>
          <Select.Option value="contract">Contract</Select.Option>
          <Select.Option value="freelance">Freelance</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 14 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default JobPostingForm;
