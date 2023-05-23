import React, { useState } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import image from "../images/avatar.jpg";
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
        <Image
          src={image}
          alt="author"
          roundedCircle
          width="30px"
          onClick={() =>
            navigate(`/users/${post.userId}`, {
              state: { userId: post.userId },
            })
          }
        />
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
                    <Image
                      src={image}
                      alt="author"
                      roundedCircle
                      width="30px"
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
