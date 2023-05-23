import { combineReducers } from "redux";
import postReducer from "./postReducers";
import userReducer from "./userReducers";
const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer,
});

export default rootReducer;
