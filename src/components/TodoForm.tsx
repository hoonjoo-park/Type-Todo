import { COLOR } from 'constants/';
import React from 'react';
import styled from 'styled-components';
type Props = {
  setInputValue: (val: string) => void;
  inputValue: string;
  todos: string[];
  setTodos: (val: string[]) => void;
};
export const TodoForm = ({
  inputValue,
  setInputValue,
  setTodos,
  todos,
}: Props) => {
  const handleTypeInput = (
    e: React.ChangeEvent<Element> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue('');
    setTodos([...todos, inputValue]);
  };
  return (
    <From onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        name='todoInput'
        id='todoInput'
        placeholder='오늘의 할 일을 입력해주세요 :)'
        onChange={(e) => handleTypeInput(e)}
        onKeyUp={(e) => handleTypeInput(e)}
        value={inputValue}
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
  /* max-height: 0; */
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
