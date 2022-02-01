import React from 'react';
import styled from 'styled-components';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { LAYOUT } from 'constants/';
export const TodoList = () => {
  return (
    <List>
      <TodoUl>
        <Todo>
          <MdOutlineCheckBoxOutlineBlank />
          <span>Something todo</span>
        </Todo>
        <Todo>
          <MdOutlineCheckBoxOutlineBlank />
          <span>Something todo</span>
        </Todo>
        <Todo>
          <MdOutlineCheckBoxOutlineBlank />
          <span>Something todo</span>
        </Todo>
      </TodoUl>
    </List>
  );
};
const List = styled.div`
  flex: 1;
  padding: 1.5em ${LAYOUT.padding};
`;
const TodoUl = styled.ul`
  width: 100%;
  height: 100%;
`;
const Todo = styled.li`
  display: flex;
  align-items: center;
  height: 3.5rem;
  cursor: pointer;
  span {
    font-size: 1.3rem;
    transform: translateY(1px);
  }
  svg {
    margin-right: 0.5rem;
    font-size: 1.5rem;
  }
`;
