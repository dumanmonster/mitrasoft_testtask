// pages/UserDetails.js
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Post from "../components/Post";
import { fetchAllComments } from "../store/actions/commentAction";
import { toggleComments } from "../store/actions/postActions";
import { fetchUser, fetchUserPosts } from "../store/actions/userActions";
import { getAllComments } from "../store/selectors/commentSelectors";
import { getUser, getUserPosts } from "../store/selectors/userSelectors";
import Spinner from "react-bootstrap/Spinner";

const UserDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const posts = useSelector(getUserPosts);

  const comments = useSelector(getAllComments);

  useEffect(() => {
    dispatch(fetchUserPosts(state.userId));
    dispatch(fetchAllComments());
    dispatch(fetchUser(state.userId));
  }, [dispatch, state.userId]);

  const handleToggleComments = (postId) => {
    dispatch(toggleComments(postId));
  };
  const handlePostComments = (postId) => {
    let postComments = comments.filter((c) => c.postId === postId);
    return postComments;
  };

  return (
    <Container className="d-flex flex-column align-items-center">
      {user && user.name ? (
        <>
          <div className="d-flex gap-4 w-100">
            <Button
              className="h-4"
              variant="secondary"
              onClick={() => navigate("/")}
            >
              Назад
            </Button>
            <Card className="bg-dark text-white flex-grow-1">
              <Card.Body>
                <Card.Title>Name: {user.name}</Card.Title>
                <Card.Text>Email: {user.email}</Card.Text>
                <Card.Text>Phone: {user.phone}</Card.Text>
                <Card.Text>Username: {user.username}</Card.Text>
                <Card.Text>Website: {user.website}</Card.Text>
                <Card.Text>Address:</Card.Text>
                <ul>
                  <li>City: {user.address.city}</li>
                  <li>Street: {user.address.street}</li>
                  <li>Suite: {user.address.suite}</li>
                  <li>Zipcode: {user.address.zipcode}</li>
                </ul>
                <Card.Text>Company:</Card.Text>
                <ul>
                  <li>Name: {user.company.name}</li>
                  <li>Catchphrase: {user.company.catchPhrase}</li>
                  <li>BS: {user.company.bs}</li>
                </ul>
              </Card.Body>
            </Card>
          </div>

          <h3 className="m-4">User posts</h3>
          <div className="d-flex flex-column">
            {posts.length ? (
              posts?.map((post) => (
                <Post
                  post={post}
                  key={post.id}
                  comments={handlePostComments(post.id)}
                  onToggleComments={handleToggleComments}
                />
              ))
            ) : (
              <Button variant="secondary" disabled className="flex-grow-1">
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                User doesn't have posts...
              </Button>
            )}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default UserDetails;
