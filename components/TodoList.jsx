import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import TodoListItem from "./TodoListItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, getTodos } from "../redux/actions/todosAction";

const Container = styled.div`
  box-shadow: inset 12.31px 12.31px 11px #e1e3e7,
    inset -12.31px -12.31px 11px #fbfdff;
`;

const TodoList = () => {
  /******** State *********/
  const dispatch = useDispatch();
  const { todos, completedTodo } = useSelector((state) => state.todos);

  /******** Useffect Hook ********/
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  

  const handleDelete = () => {
    if (todos !== undefined && todos.length > 0) {
      dispatch(deleteTodo(todos));
    }
  };

  return (
    <Container className="w-full h-full bg-slate-100">
      {/* todos list counter and clear action */}
      <div className="flex items-center justify-between h-14">
        <div className="font-semibold text-slate-800 ml-6 ">
          {completedTodo && completedTodo}/{todos && todos.length}
        </div>
        <div
          className="bg-amber-600 cursor-pointer uppercase text-slate-50 text-xs mr-5 rounded-sm py-1 px-2"
          onClick={handleDelete}
        >
          <span className="text-md uppercase mr-2">X</span>
          clear done todos
        </div>
      </div>

      {/* todo list item */}
      <div className="w-11/12 mx-auto flex flex-col gap-4">
        {todos &&
          todos.length > 0 &&
          todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />)}
      </div>
    </Container>
  );
};

export default TodoList;
