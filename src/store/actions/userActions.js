// userActions.js
import axios from 'axios';
import {
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE
} from './userActionTypes';

export const fetchUserPosts = (userId) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_USER_POSTS });
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
      );
      dispatch({ type: FETCH_USER_POSTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_USER_POSTS_FAILURE, payload: error.message });
    }
  };
};
