import {
  FETCH_ALL_COMMENTS,
  FETCH_ALL_COMMENTS_FAILURE,
  FETCH_ALL_COMMENTS_SUCCESS,
} from "./commentActionTypes";

export const fetchAllComments = () => ({
  type: FETCH_ALL_COMMENTS,
});
export const fetchAllCommentsSuccess = (comments) => ({
  type: FETCH_ALL_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchAllCommentsFailure = (error) => ({
  type: FETCH_ALL_COMMENTS_FAILURE,
  payload: error,
});
