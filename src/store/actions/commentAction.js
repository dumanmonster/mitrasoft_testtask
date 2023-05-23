import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_FAILURE,
  FETCH_COMMENTS_SUCCESS,
} from "./commentActionTypes";

export const fetchComments = (postId) => ({
  type: FETCH_COMMENTS,
  payload: postId,
});

export const fetchCommentsSuccess = (comments) => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsFailure = (error) => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});
