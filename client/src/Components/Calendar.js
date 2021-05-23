import React from "react";
import * as dateFns from "date-fns";
import format from 'date-fns/format'

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      passDate: props.setDate,
    };
  }

  renderHeader() {
    const dateFormat = 'MMMM yyyy';
    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
            </div>
        </div>
        <div className="col col-center">
          <span style={{ "font-size": "0.75em" }}>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const days = [];
    const formattedDays = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {formattedDays[i]/*dateFns.format(dateFns.addDays(startDate, i), dateFormat, {width:abbreviated})*/}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
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
            className={`col cell ${!dateFns.isSameMonth(day, monthStart)
              ? "notInMonth"
              : dateFns.isSameDay(day, selectedDate) ? "today" : ""
              }`}
            key={day}
            onClick={() => this.onDateClick(cloneDay)}
          >
            <span className="dayNum">{formattedDate}</span>
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
  }

  onDateClick = day => {
    console.log(format(day, 'MM/dd/yyyy'));

    this.state.passDate(format(day, 'MM/dd/yyyy'));
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;