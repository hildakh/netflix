import styled from "styled-components";

export const ListHead = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: purple;
  color: white;
`;

export const Button = styled.button`
  background-color: white;
  cursor: pointer;
`

export const WeekDayName = styled.div`
  width: calc(100% * 1 / 7 - 20px);
  min-width: 127px;
  margin: 10px;
  color: white;
  text-align: center;
`;

export const DayList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-width: 1030px;
  height: 90%;

`

export const DayCard = styled.div`
  width: calc(100% * 1/7 - 20px);
  min-width: 127px;
  height: 13%;
  border-radius: 10px;
  margin: 10px 10px 0;
  box-shadow: 0 0 5px 2px #d8d8d8;
  cursor: pointer;
  text-align: center;
  color: purple;

  :hover {
    background-color: #ffe6ff;
  }
`;

export const EmptyDay = styled.div`
    width: calc(100% * 1/7 - 20px);
  min-width: 127px;
  height: 13%;
  margin: 10px 10px 0;
`
