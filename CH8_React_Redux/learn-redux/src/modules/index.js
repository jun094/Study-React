// counter, todos 2개의 Reducer가 존재함
// 한개로 합쳐주는 combineReducer 사용하여 rootReducer를 만들어줌

import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;
