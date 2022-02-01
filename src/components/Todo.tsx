import React, { useState } from 'react';
import styled from 'styled-components';
import {
  MdOutlineCheckBoxOutlineBlank,
  MdCheckBox,
  MdClose,
} from 'react-icons/md';
import { COLOR } from 'constants/';
type Props = {
  todos: string[];
  todo: string;
  setTodos: (val: string[]) => void;
};
export const Todo = ({ todos, todo, setTodos }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheck = () => {
    setIsChecked((prev) => !prev);
  };
  const handleDelete = () => {
    let newTodos: string[] = todos.filter((item) => item !== todo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };
  return (
    <Li onClick={handleCheck}>
      {isChecked ? (
        <MdCheckBox style={{ color: COLOR.main }} />
      ) : (
        <MdOutlineCheckBoxOutlineBlank />
      )}
      <span className={isChecked ? 'checked' : ''}>{todo}</span>
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
