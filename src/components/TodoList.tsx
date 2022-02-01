import React from 'react';
import styled from 'styled-components';
import { LAYOUT } from 'constants/';
import { Todo } from './Todo';
type Props = {
  todos: string[];
  setTodos: (val: string[]) => void;
};
export const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <List>
      <TodoUl>
        {todos.length > 0 ? (
          todos.map((todo, i) => (
            <Todo key={i} todo={todo} setTodos={setTodos} todos={todos} />
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
const NoTodo = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
`;
