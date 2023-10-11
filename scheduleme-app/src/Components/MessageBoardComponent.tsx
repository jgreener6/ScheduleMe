import React, { useState } from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

const { TextArea } = Input;

const MessageBoard: React.FC = () => {
  const [comments, setComments] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setComments([
      ...comments,
      {
        author: 'User',
        content: <p>{value}</p>,
        datetime: moment().fromNow(),
      },
    ]);

    setValue('');
  };

  return (
    <div>
      <List
        className="comment-list"
        header={`${comments.length} messages`}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item) => (
          <li>
            <Comment
              author={item.author}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
      <Form.Item>
        <TextArea rows={4} onChange={(e) => setValue(e.target.value)} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" onClick={handleSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
};

export default MessageBoard;
