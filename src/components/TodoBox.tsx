import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import styled from 'styled-components';
import { AddButton } from './AddButton';

export const TodoBox = () => {
  type todo = string[];
  const [todos, setTodos] = useState<todo>([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <TodoContainer>
      <TodoHeader />
      <TodoList todos={todos} />
      <TodoForm
        inputValue={inputValue}
        setInputValue={setInputValue}
        setTodos={setTodos}
        todos={todos}
        isOpen={isOpen}
      />
      <AddButton setIsOpen={setIsOpen} isOpen={isOpen} />
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 35vw;
  height: 85vh;
  max-width: 600px;
  max-height: 750px;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: 0px 7px 15px 0px rgb(0 0 0 / 71%);
`;
