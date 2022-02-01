import React from 'react';
import styled from 'styled-components';
import { MdOutlineAdd } from 'react-icons/md';
import { COLOR } from 'constants/';

export const AddButton = () => {
  return (
    <Btn>
      <MdOutlineAdd />
    </Btn>
  );
};
const Btn = styled.button`
  position: absolute;
  left: 50%;
  bottom: -4%;
  transform: translateX(-50%);
  width: 4rem;
  height: 4rem;
  background-color: ${COLOR.main};
  border-radius: 50%;
  svg {
    font-size: 2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
  }
`;
