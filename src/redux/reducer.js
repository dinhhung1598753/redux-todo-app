import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import todoListReducer from "./todoListReducer";

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;
