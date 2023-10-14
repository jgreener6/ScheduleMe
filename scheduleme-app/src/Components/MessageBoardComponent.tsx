import React, { useState } from 'react';
import { List, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import CommentComponent from './CommentComponent'; // Import your custom CommentComponent

const { TextArea } = Input;

type CommentType = {
  author: string;
  content: string;
  datetime: string;
};

const MessageBoardComponent: React.FC = () => {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [value, setValue] = useState<string>('');

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    const newComment: CommentType = {
      author: 'User',
      content: value,
      datetime: new Date().toLocaleString(),
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setValue('');
  };

  return (
    <div>
      <List
        className="comment-list"
        header={`${comments.length} messages`}
        itemLayout="horizontal"
        dataSource={comments}
        renderItem={(item, index) => (
          <li key={index}>
            <CommentComponent // Use your custom CommentComponent here
              author={item.author}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
      <TextArea rows={4} onChange={(e) => setValue(e.target.value)} value={value} />
      <Button type="primary" onClick={handleSubmit}>
        Add Comment
      </Button>
    </div>
  );
};

export default MessageBoardComponent;
