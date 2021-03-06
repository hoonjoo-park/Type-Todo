import React from 'react';
import styled from 'styled-components';
import { LAYOUT } from 'constants/';
import { Todo } from './Todo';
interface Props {
  todos: { id: number; text: string; isChecked: boolean }[] | [];
  setTodos: (val: any) => void;
}
export const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <List>
      <TodoUl>
        {todos.length > 0 ? (
          todos.map((todo, i) => (
            <Todo key={i} setTodos={setTodos} todos={todos} todo={todo} />
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
  max-height: 585px;
  overflow-y: scroll;
`;
const NoTodo = styled.span`
  display: block;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
`;
