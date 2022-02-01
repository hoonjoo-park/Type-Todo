import React from 'react';
import styled from 'styled-components';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { LAYOUT } from 'constants/';
type Props = {
  todos: string[];
};
export const TodoList = ({ todos }: Props) => {
  return (
    <List>
      <TodoUl>
        {todos.length > 0 ? (
          todos.map((todo, i) => (
            <Todo key={i}>
              <MdOutlineCheckBoxOutlineBlank />
              <span>{todo}</span>
            </Todo>
          ))
        ) : (
          <NoTodo>오늘의 할 일을 기록해보세요!</NoTodo>
        )}
      </TodoUl>
    </List>
  );
};
const List = styled.div`
  flex: 1;
  padding: 2em ${LAYOUT.padding};
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
const NoTodo = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
`;
