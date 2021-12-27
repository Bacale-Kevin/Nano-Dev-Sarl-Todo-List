import React, { useState } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/actions/todosAction";

const Container = styled.div`
  border-radius: 0px;
  box-shadow: 5px 5px 7px #c5c5c5, -5px -5px 7px #ffffff;
`;

const InputContainer = styled.form``;

const Button = styled.button`
  box-shadow: inset 9.91px 9.91px 15px #d9dade,
    inset -9.91px -9.91px 15px #ffffff;
`;
const ButtonActive = styled.button`
  box-shadow: 2px 2px 5px #c5c5c5, -2px -2px 5px #ffffff;
`;
const Input = styled.input`
  background: transparent;
  background: #e2e8f0;
  border-radius: 2%;
  box-shadow: inset 9.91px 9.91px 15px #d9dade,
    inset -9.91px -9.91px 15px #ffffff;
  &:focus {
    box-shadow: 2px 2px 5px #c5c5c5, -2px -2px 5px #ffffff;
  }
`;

const CreateTodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  
  /******** HandleSubmit *********/
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return;
    }
    dispatch(createTodo(title));
    setTitle("");
  };
  return (
    <Container className=" w-full h-24 bg-slate-100 flex items-center justify-center">
      <InputContainer
        onSubmit={handleSubmit}
        className=" w-8/12 text-slate-600"
      >
        <Input
          placeholder="Task name:"
          className=" py-3  outline-none w-full "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </InputContainer>
      <InputContainer className="py-3  text-slate-600">
        {title !== "" ? (
          <ButtonActive
            onClick={handleSubmit}
            type="submit"
            className="uppercase px-4 py-3 text-slate-800 font-semibold text-sm"
          >
            Add todo
          </ButtonActive>
        ) : (
          <Button
            onClick={handleSubmit}
            type="submit"
            className="uppercase px-4 py-3 text-slate-800 font-semibold text-sm"
          >
            Add todo
          </Button>
        )}
      </InputContainer>
    </Container>
  );
};

export default CreateTodoForm;
