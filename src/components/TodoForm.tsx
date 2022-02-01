import { COLOR } from 'constants/';
import React from 'react';
import styled from 'styled-components';
export const TodoForm = () => {
  return (
    <From>
      <input
        type='text'
        name='todoInput'
        id='todoInput'
        placeholder='오늘의 할 일을 입력해주세요 :)'
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
