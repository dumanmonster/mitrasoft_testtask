import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const Post = ({ post, comments, onToggleComments }) => {
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
