import React from 'react';
import styled from 'styled-components';
import {
  MdOutlineCheckBoxOutlineBlank,
  MdCheckBox,
  MdClose,
} from 'react-icons/md';
import { COLOR } from 'constants/';

interface Props {
  todos: { id: number; text: string; isChecked: boolean }[] | [];
  setTodos: (val: any) => void;
  todo: { id: number; text: string; isChecked: boolean };
}

export const Todo = ({ todos, todo, setTodos }: Props) => {
  const handleCheck = () => {
    let newTodo = {
      id: todo['id'],
      text: todo['text'],
      isChecked: !todo['isChecked'],
    };
    let todosWithoutThisTodo = todos.filter(
      (item) => item['id'] !== todo['id']
    );
    let newTodos = [...todosWithoutThisTodo, newTodo];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    return;
  };
  const handleDelete = () => {
    let newTodos: {}[] = todos.filter((item) => item['id'] !== todo['id']);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
  return (
    <Li>
      {todo['isChecked'] ? (
        <MdCheckBox style={{ color: COLOR.main }} onClick={handleCheck} />
      ) : (
        <MdOutlineCheckBoxOutlineBlank onClick={handleCheck} />
      )}
      <span className={todo['isChecked'] ? 'checked' : ''}>{todo['text']}</span>
      <MdClose onClick={handleDelete} />
    </Li>
  );
};

const Li = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 3.5rem;
  cursor: pointer;
  span {
    font-size: 1.3rem;
    transform: translateY(1.5px);
  }
  span.checked {
    text-decoration: line-through;
  }
  svg {
    margin-right: 0.8rem;
    font-size: 1.8rem;
    transition: all 0.2s ease-in;
    z-index: 5;
  }
  &:hover svg:last-child {
    opacity: 1;
  }
  & svg:last-child {
    opacity: 0;
    color: #d64f78;
    font-size: 1.3rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
