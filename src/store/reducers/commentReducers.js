import {
  FETCH_ALL_COMMENTS_SUCCESS,
  FETCH_ALL_COMMENTS_FAILURE,
} from "../actions/commentActionTypes";

const initialState = {
  comments: [],
  error: null,
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        error: null,
      };
    case FETCH_ALL_COMMENTS_FAILURE:
      return {
        ...state,
        comments: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default commentsReducer;
