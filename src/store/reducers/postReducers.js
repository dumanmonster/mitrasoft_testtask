// postReducers.js
import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  TOGGLE_COMMENTS
} from '../actions/postActionTypes';

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case TOGGLE_COMMENTS:
      const updatedPosts = state.posts.map((post) => {
        if (post.id === action.payload) {
          return { ...post, showComments: !post.showComments };
        }
        return post;
      });
      return { ...state, posts: updatedPosts };
    default:
      return state;
  }
};

export default postReducer;
