import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

function JobPostingForm() {
  const onFinish = (values) => {
    console.log('Form values:', values);
    // Handle form submission here
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <Form onFinish={onFinish}>
        <Form.Item
          label="Job Title"
          name="title"
          rules={[{ required: true, message: 'Please enter a job title!' }]}
        >
          <Input />
        </Form.Item>
        {/* Add more Form.Item components for other fields */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Post Job
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default JobPostingForm;
