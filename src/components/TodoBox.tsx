import React from 'react';
import { TodoForm } from './TodoForm';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';

export const TodoBox = () => {
  return (
    <div>
      <TodoHeader />
      <TodoForm />
      <TodoList />
    </div>
  );
};
