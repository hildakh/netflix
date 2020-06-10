import styled from "styled-components";

export const MonthYearContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const MonthYearText = styled.p`
  width: 200px;
  margin: 0 20px;
  text-align: center;
  line-height: 40px;
`;

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

  :focus {
    border: none;
    outline: 0 none;
  }
`;

export const WeekDayName = styled.p`
  width: calc(100% * 1 / 7 - 20px);
  min-width: 127px;
  line-height: 40px;
  margin: 0 10px;
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
`;

export const DayCard = styled.div`
  width: calc(100% * 1 / 7 - 20px);
  min-width: 127px;
  height: 13%;
  border-radius: 10px;
  margin: 10px 10px 0;
  box-shadow: 0 0 5px 2px #d8d8d8;
  cursor: pointer;
  text-align: center;
  color: purple;
  visibility: ${(props) => (props.fill > 0 ? "visible" : "hidden")};
  background-color: ${(props) => (props.background ? "#ffe6ff" : "white")};
`;

export const DateText = styled.p`
  line-height: 25px;
`;

export const TitleInfo = styled.p`
  font-size: 14px;
  line-height: 35px;
`;
