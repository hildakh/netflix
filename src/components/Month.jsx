import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Head, Button, WeekDayName, DayCard, EmptyDay } from "./Month.styles";

const Month = () => {
  const daysCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const leapDaysCount = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getStartDayOfMonth = () => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

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
      console.log(new Date(date.getFullYear(), date.getMonth(), 1));
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

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
          display: "flex",
          width: "100%",
          height: "40px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button onClick={() => setDate(new Date(year, month - 1, day))}>
          &#10094;&#10094;
        </Button>
        <p
          style={{
            width: "200px",
            margin: "0 20px",
            textAlign: "center",
            lineHeight: "40px",
          }}
        >
          {/* getting the name of the month from months array based on its number */}
          {months[month]} {year}
        </p>

        <Button onClick={() => setDate(new Date(year, month + 1, day))}>
          &#10095;&#10095;
        </Button>
      </div>

      <Head>
        {weekdays.map((wday) => (
          <WeekDayName key={wday}>{wday}</WeekDayName>
        ))}
      </Head>

      <div
        className="day-list"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          minWidth: "1030px",
          height: "90%",
        }}
      >
        {/* creating an array of empty strings based on the number of days ina month */}
        {new Array(daysCount[month] + startDay).fill(" ").map((_, index) => {
          // setting the date based on array item index, starting from 0
          const day = index - (startDay - 1 );
          // conditionally rendering a day card or an empty card based on day index
        return day > 0 ? <DayCard>{day}</DayCard> : <EmptyDay />
        })}
      </div>
    </>
  );
};

export default withRouter(Month);
