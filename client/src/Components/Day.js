import React from "react";
import "./Day.css";
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passDate: props.setDate,
            currentDate: props.currentDate,
        };
        console.log(this.state.currentDate)

        this.goBack = this.goBack.bind(this)
    }

    setDateText(newDate) {
        this.setState({
            currentDate: newDate
        });
    }

    renderHeader() {
        const DateFormat = "MMDDYYYY";
        return (
            <div className="header row flex-middle">
            <div className="col col-start" >
              <div id="growIcons" className="icon" onClick={this.prevDay}> chevron_left</div>
            </div>
            <div className="col col-center">
                <span id="makeDateSmall">
                    {this.state.currentDate} </span>
            </div>
            <div className="col col-end" onClick={this.nextDay}>
              <div id="growIcons" className="icon">chevron_right</div>
            </div>
            </div>
      );
            // needs prev and next buttons to actually go to prev / next day
            // load date in header
    }
    renderHeader2() {
        const formattedDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return(
            <div className="header2 row flex-middle">
                <div className="col col-center"  >
                    <div id="weekdayBanner">
                        {formattedDays[6]}
                    </div>
                </div>
            </div>
        )
        }
                    
    getEvents() {
        const daily_options = {
            method: 'get'
        }

        // temporary GET request, move as desired, gets object containing all of user's specific events
        // similar request can be made at URL http://localhost:3000/DBInfo/Weekly
        fetch('http://localhost:3000/DBInfo/Specific', daily_options)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    goBack() {
        this.state.passDate("")
    }

    renderEvent() {
        return (
            <div className="container">
                <div className="col col-center">
                    <div className="eventBox">
                        <div id="eventsTitle"> EVENTS </div>
                        <textarea rows="18" cols="50" placeholder="EVENTS" className="scrollable" id="edetails" name="edetails"></textarea>
                    </div>
                </div>
                <div className = "col col-center">
                    <div className="buttons"> 
                        <button type="CSV" value="CSV" className="button buttons">export as CSV</button>
                        <Link to="/newEvent"><button type="addE" value="addE" className="button buttons">add event</button></Link>
                        <div className="goToDay">
                            <DatePicker id="daydatepicker" value={this.state.date} onChange={date => this.setDateText(date)}/>
                            <textarea rows="1" cols="15" placeholder="MM/DD/YYYY" id="edetails" name="edetails" value={this.state.currentDate}></textarea>
                            <button type="addE" value="addE" class="button"> GO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            // make dropdown menu for goToDay button
            // load events + times 
        )
    }

    renderFooter() {
        return (
            <div className = "col col-center">
                <div className="footer">
                     <button type="addE" value="addE" class="button">back to calendar</button>
                </div>
            </div>

        )
    }

    render() {
        return (
            <div className="day">
                {this.renderHeader()}
                {this.renderHeader2()}
                {this.renderEvent()}
                {this.renderFooter()}
            </div>
        )
    }
}

export default Day;
