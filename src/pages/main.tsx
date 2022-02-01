import { TodoBox } from 'components/TodoBox';
import React from 'react';
import styled from 'styled-components';
export const Main = () => {
  return (
    <MainContainer>
      <TodoBox />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
