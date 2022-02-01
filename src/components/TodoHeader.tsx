import { COLOR, LAYOUT, MONTHS } from 'constants/';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDate } from 'utils/getDate';
export const TodoHeader = () => {
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
        <DateNum>{today!.date}</DateNum>
        <YearMonth>
          <span>{MONTHS[today!.month]}</span>
          <span>{today!.year}</span>
        </YearMonth>
      </DateBox>
      <Task>0</Task>
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
const Task = styled.div`
  font-size: 1.2rem;
`;
