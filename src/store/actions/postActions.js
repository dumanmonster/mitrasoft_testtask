// postActions.js
import axios from 'axios';
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  TOGGLE_COMMENTS
} from './postActionTypes';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_POSTS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
    }
  };
};

export const toggleComments = (postId) => {
  return { type: TOGGLE_COMMENTS, payload: postId };
};
