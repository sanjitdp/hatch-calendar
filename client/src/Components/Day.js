import React from "react";
import "./Day.css";
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as dateFns from "date-fns";
import { CSVLink, CSVDownload} from 'react-csv';
import Card from "react-bootstrap/Card";

// pass prop information every time i render

class Day extends React.Component {
    constructor(props) {
        const DateFormat = "MMMM dd yyyy";
        super(props);
        let dateObject = new Date(props.currentDate);
        console.log(dateObject);
        this.state = {
            passDate: props.setDate,
            currentDate: props.currentDate,
            currentDateObject: dateObject,
            events: null,
            // maybe these should not be in the state
            dailyEvents: null,
            weeklyEvents: null,
            csvInformation: null,
        };
        this.goBack = this.goBack.bind(this);
        this.prevDay = this.prevDay.bind(this);
        this.nextDay = this.nextDay.bind(this);
        this.currentDateString = dateFns.format(dateObject, DateFormat);
        this.getHeaderDateString = this.getHeaderDateString.bind(this);
        this.getEventsListed = this.getEventsListed.bind(this);
        //this.goToDay = this.goToDay.bind(this);
    }
    // to go forward / backward + to do calendar
    // event passes passDate
    // when someone submits a date, pass that date as MM DD YYYY to eventview
    // should b good

    componentDidMount() {
        this.getEventsListed(this.props.dateObject);
    }

    setDateText(newDate) {
        const DateFormat = "MMMM dd yyyy";
        this.setState({
            currentDateObject: newDate,
            currentDateString: dateFns.format(newDate, DateFormat)
        });
    }

    prevDay() {
        let yesterday = new Date(this.props.currentDate);
        yesterday.setDate(yesterday.getDate()-1);
        this.state.passDate(dateFns.format(yesterday, 'MM/dd/yyyy'));
    }

    nextDay() {
        let tomorrow = new Date(this.props.currentDate);
        tomorrow.setDate(tomorrow.getDate()+1);
        this.state.passDate(dateFns.format(tomorrow, 'MM/dd/yyyy'));
    }

    getHeaderDateString(dateObject) {
        return dateFns.format(dateObject, "MMMM dd yyyy")
    }

    renderHeader(dateObject) {
        const DateFormat = "MM dd yyyy";
        return (
            <div className="header row flex-middle">
            <div className="col col-start" >
              <div id="growIcons" className="icon" onClick={this.prevDay}> chevron_left</div>
            </div>
            <div className="col col-center">
                <span id="makeDateSmall">
                    {this.getHeaderDateString(dateObject)} </span>
            </div>
            <div className="col col-end" onClick={this.nextDay}>
              <div id="growIcons" className="icon">chevron_right</div>
            </div>
            </div>
      );
            // needs prev and next buttons to actually go to prev / next day
            // load date in header
    }
    renderHeader2(dateObject) {
        const formattedDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return(
            <div className="header2 row flex-middle">
                <div className="col col-center"  >
                    <div id="weekdayBanner">
                        {formattedDays[6]}
                    </div>
                </div>
            </div>
        );
    }

    // instead of setting the state
    // return a string of the events for that day
    getEventsListed(dateObject) {
        const daily_options = {
            method: 'get',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            referrer: 'no-referrer'
        }

        // temporary GET request, move as desired, gets object containing all of user's specific events
        // similar request can be made at URL http://localhost:3000/DBInfo/Weekly

        const weekly_options = {
            method: 'get',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            referrer: 'no-referrer'
        }

        fetch('http://localhost:3000/DBInfo/Specific', daily_options)
            .then((response) => response.json())
            .then((data) => {
                fetch('http://localhost:3000/DBInfo/Weekly', weekly_options)
                .then((response2) => response2.json())
                .then(async (data2) => {
                var dataArray = data2.dataWeekly;
                var importantDates = [];
                
                var tempUserInfo = this.props.currentDate;
                var monthUser = tempUserInfo.substr(0, 2);
                var dayUser = tempUserInfo.substr(3, 2);
                var yearUser = tempUserInfo.substr(6, 4);

                var monthNumUser = parseInt(monthUser);
                var dayNumUser = parseInt(dayUser);
                var yearNumUser = parseInt(yearUser);

                                

                var userDate = new Date(yearNumUser, monthNumUser, dayNumUser, 0,0,0,0);
                var userdayOfWeek = userDate.getDay();
                for(var obj of dataArray){
                    if(obj.date !== undefined){
                        var tempObj = obj.date;
                        var month = tempObj.substr(0, 2);
                        var day = tempObj.substr(3, 2);
                        var year = tempObj.substr(6, 4);

                        var monthNum = parseInt(month);
                        var dayNum = parseInt(day);
                        var yearNum = parseInt(year);

                        var tempDate = new Date(yearNum, monthNum, dayNum, 0,0,0,0);
                        var dayOfWeek  = tempDate.getDay();

                        if(userdayOfWeek === dayOfWeek){
                            importantDates.push(obj);
                        }
                    }   
                }
                const currParam = (this.props.currentDate).toString();
                if(data.dateSpecific !== undefined){
                    if(data.dateSpecific.hasOwnProperty(currParam)){
                        var dailyEventArray = [];
                        var desiredValue = data.dateSpecific[currParam];
                        var ListOfKeys = Object.keys(desiredValue);
                        var keysAndValues = ListOfKeys.map((value)=>{ 
                            const strTitle = desiredValue[value].title;
                            var tempObj = {};
                            tempObj = desiredValue[value]; 
                            dailyEventArray.push(tempObj);
                            const strDate = "Date: " + desiredValue[value].date;
                            const fromTime = "From: " + desiredValue[value].from;
                            const timeTo = "To: " + desiredValue[value].to;
                            const details = "Description: " + desiredValue[value].details;
                            return (
                                <ul key={value}>{strTitle}
                                    <li>{strDate}</li>
                                    <li>{fromTime}</li>
                                    <li>{timeTo}</li>
                                    <li>{details}</li>
                                </ul>
                                    )
                                });
                        var tempWeekly = [];
                        for(var obj1 of importantDates){
                            const strTitle = obj1.title + " - Weekly";
                            var tempObj = {};
                            tempObj = obj1;
                            tempWeekly.push(tempObj);
                            const strDate = "Date: " + obj1.date;
                            const fromTime = "From: " + obj1.from;
                            const timeTo = "To: " + obj1.to;
                            const details = "Description: " + obj.details;
                            keysAndValues.push(
                                <ul key={obj1.title}>{strTitle}
                                    <li>{strDate}</li>
                                    <li>{fromTime}</li>
                                    <li>{timeTo}</li>
                                    <li>{details}</li>
                                 </ul>
                            )
                        }
                        await this.setState({ 
                            dailyEvents: dailyEventArray,
                            weeklyEvents: tempWeekly,
                            events: keysAndValues
                        });
                    }
                }
                });
            })
        //return listElements;
    }

    getEventsCSV() {
        this.setState({
            csvInformation: (<CSVDownload data={this.presentObjectsasStrings()} filename='user_info.csv' target='_blank' > </CSVDownload>)
        });

    }

    sendEmail(){
        var strArray = this.presentObjectsasStrings();
        const email_options = {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'message': strArray
            }),
        }

        fetch('http://localhost:3000/sendEmail', email_options);
    }

    presentObjectsasStrings(){
        var sendArray = this.state.weeklyEvents.concat(this.state.dailyEvents);
        var strArray = "Here is your schedule for the day :) \n";

        for(var obj of sendArray){
            strArray = strArray + "Title: " + obj.title + "\n" + "Date: " + obj.date + "\n" + "From: " + obj.from + "\n" + "To: " + obj.to + "\n" + "Details: " + obj.details + "\n";
            strArray = strArray + "---------------------" + "\n";
        }
        return strArray;
    }

    goBack() {
        this.state.passDate("")
    }

    renderEvent(dateObject) {
        return (
            <div className="container col col-center">
                <div className="col col-start">
                    <div className="eventBox">
                    <div id="eventsTitle"> EVENTS </div>
                        <Card className ="scroll">
                            <Card.Body>
                                <Card.Text>
                                <ul textalign="left" > {this.state.events}</ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className = "col col-center">
                    <div className="buttons"> 
                        <div>
                            <button type="CSV" value="CSV" className="button buttons" onClick={() => {this.getEventsCSV()}}>export as CSV</button>
                            {this.state.csvInformation}
                        </div>
                        <button type="email" value="email" className="button buttons" onClick={() => this.sendEmail()}>send as email </button>
                        <Link to="/newEvent"><button type="addE" value="addE" className="button buttons">add event</button></Link>
                        <div className="goToDay">
                            <DatePicker id="daydatepicker" 
                            selected={this.state.currentDateObject} 
                            // this will become something else
                            onChange={date => this.setDateText(date)}
                            showTimeSelect/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderFooter() {
        return (
            <div className = "col col-center bg-yellow">
                <div className="footer">
                     <button type="addE" value="addE" className="button" onClick={this.goBack}>back to calendar</button>
                </div>
            </div>
        )
    }

    render() {
        // const DateFormat = "MMMM dd yyyy";
        // let dateObject = new Date(this.props.currentDate);
        // this.state = {
        //     passDate: this.props.setDate,
        //     currentDate: this.props.currentDate,
        //     currentDateObject: dateObject,
        //     currentDateString: dateFns.format(dateObject, DateFormat)
        // };
        let dateObject = new Date(this.props.currentDate);
        return (
            <div className="day">
                {this.renderHeader(dateObject)}
                {this.renderHeader2(dateObject)}
                {this.renderEvent(dateObject)}
                {this.renderFooter()}
            </div>
        )
    }
}

export default Day;
