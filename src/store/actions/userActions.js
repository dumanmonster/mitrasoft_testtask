import {
  FETCH_USER,
  FETCH_USER_FAILURE,
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_FAILURE,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_SUCCESS,
} from "./userActionTypes";

export const fetchUser = (userId) => ({
  type: FETCH_USER,
  payload: userId,
});
export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});
export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});
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
