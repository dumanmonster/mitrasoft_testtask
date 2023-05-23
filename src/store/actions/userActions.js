import {
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_FAILURE,
  FETCH_USER_POSTS_SUCCESS,
} from "./userActionTypes";

export const fetchUserPosts = (userId) => ({
  type: FETCH_USER_POSTS,
  payload: userId,
});

export const fetchUserPostsSuccess = (posts) => ({
  type: FETCH_USER_POSTS_SUCCESS,
  payload: posts,
});

export const fetchUserPostsFailure = (error) => ({
  type: FETCH_USER_POSTS_FAILURE,
  payload: error,
});
