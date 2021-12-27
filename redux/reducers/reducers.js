import { combineReducers } from "redux";
import {
  allTodosReducer,
  createTodosReducer,
  deleteTodosReducer,
} from "./todosReducer";

const reducer = combineReducers({
  todos: allTodosReducer,
  createTodo: createTodosReducer,
  deleteTodo: deleteTodosReducer,
});

export default reducer;
