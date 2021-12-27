import {
  TODOS_FAIL,
  TODOS_REQUEST,
  TODOS_SUCCESS,
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
import axios from "axios";

export const getTodos = () => async (dispatch) => {
  try {
    dispatch({
      type: TODOS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:9000/todos`);
    const completedTodos = await data.filter((todo) => todo.completed === true);

    dispatch({
      type: TODOS_SUCCESS,
      payload: data,
      completedTodo: completedTodos.length,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: TODOS_FAIL,
      payload: error.message,
    });
  }
};

export const createTodo = (title) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_TODOS_REQUEST,
    });

    const { data } = await axios.post(`http://localhost:9000/todos`, {
      title: title,
      completed: false,
    });

    dispatch({
      type: CREATE_TODOS_SUCCESS,
      payload: data,
    });
    dispatch(getTodos());
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: CREATE_TODOS_FAIL,
      payload: error.message,
    });
  }
};

export const completedTodoTask = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COMPLETED_TODOS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:9000/todos/${id}`);
    const updatedTodo = await axios.put(`http://localhost:9000/todos/${id}`, {
      completed: !data.completed,
      title: data.title,
    });

    // const todos = await axios.get(`http://localhost:9000/todos`);
    // const completedTodos = await todos.data.filter(
    //   (todo) => todo.completed === true
    // );

    dispatch({
      type: COMPLETED_TODOS_SUCCESS,
      payload: updatedTodo.updatedTodo,
    });
    dispatch(getTodos());
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: COMPLETED_TODOS_FAIL,
      payload: error.message,
    });
  }
};

export const deleteTodo = (todos) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_TODOS_REQUEST,
    });

    const filteredTodo = todos.filter((todo) => todo.completed === true);

    filteredTodo.forEach(async (todo) => {
      await axios.delete(`http://localhost:9000/todos/${todo.id}`);
    });

    dispatch({
      type: DELETE_TODOS_SUCCESS,
    });
    dispatch(getTodos());
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: DELETE_TODOS_FAIL,
      payload: error.message,
    });
  }
};
