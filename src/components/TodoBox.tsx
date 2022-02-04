import React, { useEffect, useState } from 'react';
import { TodoForm } from './TodoForm';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import styled from 'styled-components';
import { AddButton } from './AddButton';
interface Props {
  todos: { id: number; text: string; isChecked: boolean }[];
}
export const TodoBox = () => {
  const [todos, setTodos] = useState<Props['todos']>([]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [checkedRate, setCheckedRate] = useState(0);
  useEffect(() => {
    if (todos.length === 0) {
      let localTodos = localStorage.getItem('todos');
      if (localTodos) {
        let parsedTodos = JSON.parse(localTodos);
        setTodos(parsedTodos);
        return;
      }
    }
  }, [todos.length]);
  useEffect(() => {
    const calcCheckedRate = () => {
      let checkedCount = todos.filter((todo) => todo['isChecked']).length;
      let totalRate = Math.floor((checkedCount / todos.length) * 100);
      console.log(checkedCount, todos.length);
      setCheckedRate(totalRate);
      return;
    };
    calcCheckedRate();
  }, [todos]);
  return (
    <TodoContainer>
      <TodoHeader checkedRate={checkedRate} />
      <TodoList todos={todos} setTodos={setTodos} />
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
