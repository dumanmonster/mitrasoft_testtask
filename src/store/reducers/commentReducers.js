import {
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "../actions/commentActionTypes";

const initialState = {
  comments: [],
  error: null,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload, error: null };
    case FETCH_COMMENTS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default commentReducer;
