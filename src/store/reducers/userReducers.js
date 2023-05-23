import {
  FETCH_USER_POSTS,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
} from "../actions/userActionTypes";

const initialState = {
  user: null,
  userPosts: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return { ...state, loading: true, error: null };
    case FETCH_USER_POSTS_SUCCESS:
      return { ...state, loading: false, userPosts: action.payload };
    case FETCH_USER_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
