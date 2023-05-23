
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Loader from "../components/Loader";
import Post from "../components/Post";
import { fetchPosts, toggleComments } from "../store/actions/postActions";
import { fetchAllComments } from "../store/actions/commentAction";
import { getLoading, getPosts } from "../store/selectors/postSelectors";
import { getAllComments } from "../store/selectors/commentSelectors";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const loading = useSelector(getLoading);
  const comments = useSelector(getAllComments);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchAllComments());
  }, [dispatch]);

  const handleToggleComments = (postId) => {
    dispatch(toggleComments(postId));
  };

  const handlePostComments = (postId) => {
    let postComments = comments.filter((c) => c.postId === postId);
    return postComments;
  };
  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <h2 className="m-4">Посты</h2>
      {loading ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onToggleComments={handleToggleComments}
            comments={handlePostComments(post.id)}
          />
        ))
      )}
    </Container>
  );
};

export default Home;
