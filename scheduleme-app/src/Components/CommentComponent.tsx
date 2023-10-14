import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

type CommentProps = {
  author: string;
  content: string;
  datetime: string;
};

const CommentComponent: React.FC<CommentProps> = ({ author, content, datetime }) => {
  return (
    <div className="comment">
      <div className="comment-avatar">
        <Avatar icon={<UserOutlined />} />
      </div>
      <div className="comment-content">
        <p className="comment-author">{author}</p>
        <p className="comment-text">{content}</p>
        <p className="comment-datetime">{datetime}</p>
      </div>
    </div>
  );
};

export default CommentComponent;
