import {
  TODOS_REQUEST,
  TODOS_SUCCESS,
  TODOS_FAIL,
  COMPLETED_TODOS_FAIL,
  COMPLETED_TODOS_REQUEST,
  COMPLETED_TODOS_SUCCESS,
  CREATE_TODOS_REQUEST,
  CREATE_TODOS_SUCCESS,
  CREATE_TODOS_FAIL,
  DELETE_TODOS_SUCCESS,
  DELETE_TODOS_REQUEST,
  DELETE_TODOS_FAIL,
} from "../constants/todosConstant";

export const allTodosReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case TODOS_REQUEST:
    case COMPLETED_TODOS_REQUEST:
      return {
        loading: true,
      };
    case TODOS_SUCCESS:
      return {
        loading: false,
        success: true,
        todos: action.payload,
        completedTodo: action.completedTodo,
      };
    case COMPLETED_TODOS_SUCCESS:
      return {
        loading: false,
        success: true,
        todos: action.payload,
        // completed: action.completed,
      };

    case TODOS_FAIL:
    case COMPLETED_TODOS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const createTodosReducer = (state = { todos: {} }, action) => {
  switch (action.type) {
    case CREATE_TODOS_REQUEST:
      return {
        loading: true,
      };
    case CREATE_TODOS_SUCCESS:
      return {
        loading: false,
        success: true,
        todo: action.payload,
      };

    case CREATE_TODOS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteTodosReducer = (state = {  }, action) => {
  switch (action.type) {
    case DELETE_TODOS_REQUEST:
      return {
        loading: true,
      };
    case DELETE_TODOS_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case DELETE_TODOS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
