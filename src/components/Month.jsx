import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  MonthYearContainer,
  MonthYearText,
  ListHead,
  Button,
  WeekDayName,
  DayCard,
  DayList,
  DateText,
  TitleInfo
} from "./Month.styles";

const Month = ({ history }) => {
  const daysCount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const leapYearDaysCount = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Monday"
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
  const [day, setDay] = useState(
    // changing the format to match that of the data retrieved
    (date.getDate() < 10 ? "0" : "") + date.getDate()
  );

  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth());

  // used to ensure releaseData is retrieved and accessible to components
  const [isLoading, setIsLoading] = useState(true);
  const [releaseData, setReleaseData] = useState({});

  const days = isLeapYear(date.getFullYear()) ? leapYearDaysCount : daysCount;

  const formattedMonth =
    (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);

  const fetchReleaseData = () => {

    fetch(`https://extendsclass.com/api/json-storage/bin/eefabce`)
      .then((res) => res.json())
      .then((data) => {
        // Changing the format of the objects to naming conventions
        const transformedData = data.data.map(
          ({ launch_date: launchDate, ...item }) => ({ launchDate, ...item })
        );

        setReleaseData(transformedData);

        try {
          setIsLoading(false);
        } catch (e) {}

      });
  };

  useEffect(() => {
    const getStartDayOfMonth = () => {
      // to calculate the number of blank spots before the first day of the month
      return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());

    setStartDay(getStartDayOfMonth(date));

    history.push(`/${year}/${formattedMonth}`);

    fetchReleaseData();
  }, [date, formattedMonth, history, year]);

  return (
    <>
      {isLoading ? (
        <div>IS LOADING</div>
      ) : (
        <>
          <MonthYearContainer>
            <Button id='prev-month' onClick={() => setDate(new Date(year, month - 1, day))}>
              &#10094;&#10094;
            </Button>
            <MonthYearText>
            {/* getting the name of the month from months array based on its number */}
              {months[month]} {year}
            </MonthYearText>

            <Button id='next-month' onClick={() => setDate(new Date(year, month + 1, day))}>
              &#10095;&#10095;
            </Button>
          </MonthYearContainer>

          <ListHead>
            {weekdays.map((wday) => (
              <WeekDayName key={wday}>{wday}</WeekDayName>
            ))}
          </ListHead>

          <DayList>
            {/* creating an array of empty strings based on the number of days in a month */}
            {new Array(days[month]+(startDay - 1)).fill(" ").map((_, index) => {
              // setting the date based on array item index, starting from 0
              const day = index - (startDay -2);

              const formattedDay = (day < 10 ? "0" : "") + day;

              const formattedCompleteDate = `${year}-${formattedMonth}-${formattedDay}`;

              // comparing the date of the day to the fetched data to find a matching date
              const matchingDateInfo = releaseData.find(
                (item) => item.launchDate.slice(0, 10) === formattedCompleteDate
              );

              // conditionally rendering a day card or an empty card based on day index
              // Showing a day card if the index is greater than 0 and making card invisible if the index is less than 0 using fill prop
              return (
                <DayCard
                  key={formattedCompleteDate}
                  fill={day}
                  background={matchingDateInfo}
                >
                  <DateText>
                    {day}

                  </DateText>
                  {matchingDateInfo && (
                    <TitleInfo
                    id={matchingDateInfo.id}
                    >
                      {matchingDateInfo.title}
                    </TitleInfo>
                  )}
                </DayCard>
              );
            })}
          </DayList>
        </>
      )}
    </>
  );
};

export default withRouter(Month);
