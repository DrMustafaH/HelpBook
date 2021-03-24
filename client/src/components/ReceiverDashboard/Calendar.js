import React, { useState } from "react";
import * as dateFns from "date-fns";
import "./Calendar.scss";

export default function Calendar(props) {
  const [state, setState] = useState({
    currentMonth: new Date(),
    selectedDate: new Date(),
  });

  const Header = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon-calendar" onClick={prevMonth}>
            <img alt="arrow" src="../images/arrow.png" className="left-arrow" />
          </div>
        </div>
        <div className="col col-center">
          <h2>{dateFns.format(state.currentMonth, dateFormat)}</h2>
        </div>
        <div className="col col-end" onClick={nextMonth}>
          <div className="icon-calendar">
            <img alt="arrow" src="../images/arrow.png" />
          </div>
        </div>
      </div>
    );
  };

  const Days = () => {
    const dateFormat = "iiii";
    const days = [];

    let startDate = dateFns.startOfWeek(state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  };

  const Cells = () => {
    // const { currentMonth, selectedDate } = state;
    const monthStart = dateFns.startOfMonth(state.currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, state.selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            // onClick={() => onDateClick(dateFns.toDate(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const onDateClick = (day) => {
    setState({
      ...state,
      selectedDate: day,
    });
  };

  const nextMonth = () => {
    setState({
      currentMonth: dateFns.addMonths(state.currentMonth, 1),
    });
  };

  const prevMonth = () => {
    setState({
      currentMonth: dateFns.subMonths(state.currentMonth, 1),
    });
  };

  return (
    <div className="calendar">
      {Header()}
      {Days()}
      {Cells()}
    </div>
  );
}
