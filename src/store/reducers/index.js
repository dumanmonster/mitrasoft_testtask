import { combineReducers } from "redux";
import commentReducer from "./commentReducers";
import postReducer from "./postReducers";
import userReducer from "./userReducers";

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
  comment: commentReducer,
});

export default rootReducer;
