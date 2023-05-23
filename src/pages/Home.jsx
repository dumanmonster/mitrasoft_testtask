// pages/Home.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import Post from "../components/Post";
import { fetchPosts, toggleComments } from "../store/actions/postActions";
import { getLoading, getPosts } from "../store/selectors/postSelectors";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleToggleComments = (postId) => {
    dispatch(toggleComments(postId));
  };
  console.log(posts)
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        posts.map((post) => (
          <Post
            post={post}
            onToggleComments={handleToggleComments}
            comments={[]}
          />
        ))
      )}
    </div>
  );
};

export default Home;
