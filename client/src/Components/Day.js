import React from "react";
import "./Day.css";
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as dateFns from "date-fns";
import { CSVLink, CSVDownload} from 'react-csv';
import Card from "react-bootstrap/Card";


class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passDate: props.setDate,
            currentDate: props.currentDate,
            events: null,
            dailyEvents: null,
            weeklyEvents: null,
            csvInformation: null
        };

        this.goBack = this.goBack.bind(this)
    }

    setDateText(newDate) {
        const DateFormat = "MMMM dd yyyy";
        this.setState({
            currentDateObject: newDate,
            currentDateString: dateFns.format(newDate, DateFormat)
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
                    {this.state.currentDateString} </span>
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
        );
    }

    getEventsListed() {
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
                
                var tempUserInfo = this.state.currentDate;
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
                

                const currParam = (this.state.currentDate).toString();
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
        console.log("HO")
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

    renderEvent() {
        //this.getEventsListed();
        return (
            <div className="container col col-center">
                <div className="col col-start">
                    <div className="eventBox">
                    <div id="eventsTitle"> EVENTS </div>
                        <Card className ="scroll">
                            <Card.Body>
                                <Card.Text>
                                <ul textalign="left" onLoad={this.getEventsListed()}> {this.state.events} </ul>
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
                            <DatePicker id="daydatepicker" s
                            selected={this.state.currentDateObject} 
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
