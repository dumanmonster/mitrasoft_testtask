import { all, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "../actions/postActionTypes";
import {
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
} from "../actions/userActionTypes";

function* fetchPostsSaga() {
  try {
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
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/posts?userId=${action.payload}`
    );
    yield put({ type: FETCH_USER_POSTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_USER_POSTS_FAILURE, payload: error.message });
  }
}

function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS, fetchPostsSaga);
}

function* watchFetchUserPosts() {
  yield takeEvery(FETCH_USER_POSTS, fetchUserPostsSaga);
}

export default function* rootSaga() {
  yield all([watchFetchPosts(), watchFetchUserPosts()]);
}
