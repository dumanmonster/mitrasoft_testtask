// pages/UserDetails.js
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Post from "../components/Post";
import { toggleComments } from "../store/actions/postActions";
import { fetchUserPosts } from "../store/actions/userActions";
import {
  getUser,
  getUserLoading,
  getUserPosts,
} from "../store/selectors/userSelectors";
const UserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const posts = useSelector(getUserPosts);
  const loading = useSelector(getUserLoading);

  useEffect(() => {
    dispatch(fetchUserPosts(userId));
  }, [dispatch, userId]);

  const handleToggleComments = (postId) => {
    dispatch(toggleComments(postId));
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Card>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>Email: {user.email}</Card.Text>
            </Card.Body>
          </Card>
          {posts.map((post) => (
            <Post
              post={post}
              comments={[]}
              onToggleComments={handleToggleComments}
            />
          ))}
          <Button variant="secondary" onClick={() => navigate("/")}>
            Назад
          </Button>
        </>
      )}
    </div>
  );
};

export default UserDetails;
