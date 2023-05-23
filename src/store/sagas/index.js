import axios from "axios";
import { all, call, put, takeEvery, delay } from "redux-saga/effects";
import {
  FETCH_ALL_COMMENTS,
  FETCH_ALL_COMMENTS_FAILURE,
  FETCH_ALL_COMMENTS_SUCCESS,
} from "../actions/commentActionTypes";
import {
  FETCH_POSTS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_SUCCESS,
} from "../actions/postActionTypes";
import {
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_FAILURE,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
} from "../actions/userActionTypes";

function* fetchPostsSaga() {
  try {
    yield delay(500);
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );
    yield put({ type: FETCH_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILURE, payload: error.message });
  }
}

function* fetchUserPostsSaga(action) {
  try {
    yield delay(500);
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${action.payload}/posts`
    );
    yield put({ type: FETCH_USER_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_USER_POSTS_FAILURE, payload: error.message });
  }
}
function* fetchUserSaga(action) {
  try {
    yield delay(500);
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${action.payload}`
    );
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_USER_FAILURE, payload: error.message });
  }
}
function* fetchAllCommentsSaga() {
  try {
    yield delay(500);
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/comments"
    );
    yield put({ type: FETCH_ALL_COMMENTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_ALL_COMMENTS_FAILURE, payload: error.message });
  }
}

function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS, fetchPostsSaga);
}
function* watchFetchComments() {
  yield takeEvery(FETCH_ALL_COMMENTS, fetchAllCommentsSaga);
}

function* watchFetchUserPosts() {
  yield takeEvery(FETCH_USER_POSTS, fetchUserPostsSaga);
}
function* watchFetchUser() {
  yield takeEvery(FETCH_USER, fetchUserSaga);
}

export default function* rootSaga() {
  yield all([
    watchFetchPosts(),
    watchFetchUserPosts(),
    watchFetchComments(),
    watchFetchUser(),
  ]);
}
