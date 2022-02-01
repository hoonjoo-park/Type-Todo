import { COLOR, LAYOUT, MONTHS } from 'constants/';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDate } from 'utils/getDate';

interface Props {
  checkedRate: number;
}
export const TodoHeader = ({ checkedRate }: Props) => {
  type todo = { year: number; month: number; date: string };
  const [today, setToday] = useState<todo | null>(null);
  useEffect(() => {
    let stamp: Date = new Date();
    let dateResult = getDate(stamp);
    setToday(dateResult);
  }, []);
  return (
    <Header>
      <DateBox>
        {today ? (
          <>
            <DateNum>{today!.date}</DateNum>
            <YearMonth>
              <span>{MONTHS[today!.month]}</span>
              <span>{today!.year}</span>
            </YearMonth>
          </>
        ) : (
          <span>Loading...</span>
        )}
      </DateBox>
      <Task checkedRate={checkedRate}>
        <span>{isNaN(checkedRate) ? 0 : checkedRate}%</span>
      </Task>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.5rem;
  padding: 0 ${LAYOUT.padding};
  border-bottom: 1px solid ${COLOR.main_light};
`;
const DateBox = styled.div`
  display: flex;
`;
const DateNum = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-right: 0.5rem;
  color: ${COLOR.main};
`;
const YearMonth = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 500;
  color: ${COLOR.main_light};
`;
const Task = styled.div<{ checkedRate: number }>`
  position: relative;
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
  font-size: 0.7rem;
  font-weight: 900;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  background: ${(props) =>
    `conic-gradient(#6e7fff ${props.checkedRate * 3.6}deg, ${
      COLOR.main_light
    } ${props.checkedRate * 3.6}deg)`};
  &::before {
    content: '';
    position: absolute;
    width: 75%;
    height: 75%;
    background-color: #ffffff;
    border-radius: 50%;
  }
  span {
    position: relative;
    transform: translateY(1.5px);
  }
`;
