import React from 'react';
import styled from 'styled-components';
import { MdOutlineAdd } from 'react-icons/md';
import { COLOR } from 'constants/';
interface Props {
  setIsOpen: (val: any) => void;
  isOpen: boolean;
}
export const AddButton = ({ setIsOpen, isOpen }: Props) => {
  const handleRotate = () => {
    setIsOpen((prev: any) => !prev);
  };
  return (
    <Btn className={isOpen ? 'rotate' : ''} onClick={handleRotate}>
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
  transition: all 0.3s ease-in-out;
  &.rotate {
    transform: translateX(-50%) rotate(45deg);
    background-color: #d64f78;
  }
  svg {
    font-size: 2rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
  }
`;
