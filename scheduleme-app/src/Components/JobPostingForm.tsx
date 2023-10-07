import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

interface JobDetails {
  title: string;
  // Add more fields here
}

interface JobPostingFormProps {
  onFinish: (values: JobDetails) => void;
}

const JobPostingForm: React.FC<JobPostingFormProps> = ({ onFinish }) => {
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <h2>Post a Job</h2>
      <Form
        name="jobPosting"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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
};

export default JobPostingForm;
