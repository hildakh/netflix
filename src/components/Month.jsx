import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Day from "./Day";
import { Head, WeekDayName } from "./Month.styles";

const Month = () => {

  const daysCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const leapDaysCount = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weekdays= ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const getStartDayOfMonth = () => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  const isLeapYear = year => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth());

  const days = isLeapYear(date.getFullYear()) ? leapDaysCount : daysCount;

  useEffect(() => {

    const getStartDayOfMonth = () => {
      // to calculate the number of blank spots before the first day of the month
      console.log(new Date(date.getFullYear(), date.getMonth(), 1))
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());

    setStartDay(getStartDayOfMonth(date));

  }, [date]);


  return (
    <>
      <div
        className="month-name"
        style={{
          height: '40px',
          textAlign: "center",
        }}
      >
        June
      </div>

      <Head>
        <WeekDayName>Sunday</WeekDayName>
        <WeekDayName>Monday</WeekDayName>
        <WeekDayName>Sunday</WeekDayName>
        <WeekDayName>Monday</WeekDayName> <WeekDayName>Sunday</WeekDayName>
        <WeekDayName>Monday</WeekDayName>
        <WeekDayName>Monday</WeekDayName>
      </Head>

      <div
        className="day-list"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          height: "100%",
          overflow: "scroll",
        }}
      >
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />

        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />

        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />

        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    </>
  );
};

export default withRouter(Month);
