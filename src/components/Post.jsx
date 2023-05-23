import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Post = ({ post, onToggleComments, comments }) => {
  const [showComments, setShowComments] = useState(false);
  const navigate = useNavigate();
  const toggleComments = () => {
    setShowComments(!showComments);
    onToggleComments(post.id);
  };
  return (
    <Card className="mb-4 bg-dark text-white w-100">
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Button variant="secondary" onClick={toggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </Button>
        {showComments && (
          <>
            {comments.map((comment) => (
              <Card key={comment.id} className="my-2 bg-secondary text-white">
                <Card.Body>
                  <div className="d-flex align-items-center mb-2">
                    <AccountCircleIcon
                      className="mr-2"
                      onClick={() =>
                        navigate(`/users/${comment.id}`, {
                          state: { userId: comment.id },
                        })
                      }
                    />

                    <Card.Title className="mb-0">{comment.email}</Card.Title>
                  </div>
                  <Card.Text>{comment.body}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default Post;
