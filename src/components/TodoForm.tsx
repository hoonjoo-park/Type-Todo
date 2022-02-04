import { COLOR } from 'constants/';
import React, { ReactElement, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface Props {
  todos: { id: number; text: string; isChecked: boolean }[] | [];
  setTodos: (val: any) => void;
  setInputValue: (val: string) => void;
  inputValue: string;
  isOpen: boolean;
}

export const TodoForm = ({
  inputValue,
  setInputValue,
  setTodos,
  todos,
  isOpen,
}: Props) => {
  const handleTypeInput = (
    e: React.ChangeEvent<Element> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;
    setInputValue('');
    const newId = todos.length === 0 ? 0 : todos[todos.length - 1]['id'] + 1;
    let newTodos = [
      ...todos,
      { id: newId, text: inputValue, isChecked: false },
    ];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <From className={isOpen ? 'open' : ''} onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        name='todoInput'
        id='todoInput'
        placeholder='오늘의 할 일을 입력해주세요 :)'
        onChange={(e) => handleTypeInput(e)}
        onKeyUp={(e) => handleTypeInput(e)}
        value={inputValue}
        ref={inputRef}
      />
    </From>
  );
};

const From = styled.form`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20%;
  background-color: ${COLOR.main_light};
  overflow: hidden;
  bottom: 0;
  max-height: 0;
  transition: all 0.2s ease-in-out;
  &.open {
    max-height: 9rem;
    z-index: 10;
  }
  input {
    width: 60%;
    height: 30%;
    padding: 0 1em;
    border-radius: 5px;
    margin-top: 2.5rem;
    background-color: #ffffff;
  }
  & input::placeholder {
    color: #393e46;
    text-align: center;
  }
`;
