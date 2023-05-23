// pages/Home.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
    <div>
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
    </div>
  );
};

export default Home;
