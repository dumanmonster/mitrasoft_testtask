import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Post = ({ post, onToggleComments, comments }) => {
  const [showComments, setShowComments] = useState(false);
 
  const toggleComments = () => {
    setShowComments(!showComments);
    onToggleComments(post.id);
  };

  return (
    <Card className="mb-4" key={post.id}>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="primary" onClick={toggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </Button>
        {showComments && (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.email}: </strong>
                {comment.body}
              </li>
            ))}
          </ul>
        )}
      </Card.Body>
    </Card>
  );
};

export default Post;
