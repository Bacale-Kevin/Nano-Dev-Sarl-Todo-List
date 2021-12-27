import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { useDispatch } from "react-redux";
import { completedTodoTask, getTodos } from "../redux/actions/todosAction";

const CheckBox = styled.input``;

const List = styled.div`
  border-radius: 2px;
  box-shadow: 5px 5px 7px #c5c5c5, -5px -5px 7px #ffffff;

  &:hover {
    > * ${CheckBox} {
    }
  }
`;

const Button = styled.button`
  background: #eef0f4;
  box-shadow: 9.91px 9.91px 15px #d9dade, -9.91px -9.91px 15px #ffffff;
`;

const Title = styled.div`
   ;
`;
const TitleLineThrough = styled.div`
  text-decoration: line-through;
`;

const TodoListItem = ({ todo }) => {
  /******** Component State ********/
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

   /******** Useffect Hook ********/
  //  useEffect(() => {
  //   dispatch(getTodos());
  // }, [dispatch]);

  /******** Handle Checkbox Change ********/
  const toggleCheckBox = (value) => !value;

  return (
    <>
      <List className="py-2 cursor-pointer">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start w-10/12">
            <CheckBox
              id="checkbox-3"
              aria-describedby="checkbox-3"
              type="checkbox"
              checked={checked || todo.completed}
              onChange={() => setChecked(toggleCheckBox)}
              onClick={() => dispatch(completedTodoTask(todo.id))}
              className="check  bg-ring-blue-300 ml-5  border-gray-50 focus:ring-3 focus:ring-blue-300 h-6 w-6 rounded"
            />
            {checked || todo.completed ? (
              <TitleLineThrough className="font-semibold text-2xl ml-6 ">
                {todo.title}
              </TitleLineThrough>
            ) : (
              <Title className="font-semibold text-2xl ml-6 ">
                {todo.title}
              </Title>
            )}
          </div>
          <Button className=" h-12 w-12 rounded-full mr-3 text-2xl font-semibold">
            X
          </Button>
        </div>
      </List>
    </>
  );
};

export default TodoListItem;
