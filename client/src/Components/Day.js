import { setDate } from "date-fns";
import React from "react";
import "./Day.css";
import {Link} from 'react-router-dom';
import * as dateFns from "date-fns";

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passDate: props.setDate,
            currentDate: props.currentDate,
            events: null,
            weeklyEvents: null
        };
        console.log(this.state.currentDate)

        this.goBack = this.goBack.bind(this)
    }

    renderHeader() {
        return (
            <div className="header row flex-middle">
                <div className="col col-center">
                    <span> {this.state.currentDate} </span>
                </div>
                <div className="col col-center"  >
                    <div id="weekdayBanner"> day of the week </div>
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
        

        /*var weeklyInfo = this.getWeeklySchedule()
            .then((response) => response.json())
            .then((data) => {
                return data;
            });
        console.log(weeklyInfo);*/
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
                .then((data2) => {
                console.log(data2);
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

                for(var obj in dataArray){
                    if(obj.date !== undefined){
                        obj = obj.date;
                        var month = obj.substr(0, 2);
                        var day = obj.substr(3, 2);
                        var year = obj.substr(6, 4);

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
                        
                        var desiredValue = data.dateSpecific[currParam];
                        var ListOfKeys = Object.keys(desiredValue);
                        var keysAndValues = ListOfKeys.map((value)=>{ 
                            const strTitle = desiredValue[value].title;
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
                        for(var obj in importantDates){
                            const strTitle = obj.title;
                            const strDate = "Date: " + obj.date;
                            const fromTime = "From: " + obj.from;
                            const timeTo = "To: " + obj.to;
                            const details = "Description: " + obj.details;
                            keysAndValues.push(
                                <ul key={obj.title}>{strTitle}
                                    <li>{strDate}</li>
                                    <li>{fromTime}</li>
                                    <li>{timeTo}</li>
                                    <li>{details}</li>
                                 </ul>

                            )
                        }
                        this.setState({ 

                            events: keysAndValues
                            
                        })


                    }
                }

                });
                

            })
        //return listElements;
    }

    getEvents(){
        
    }

    goBack() {
        this.state.passDate("")
    }

    renderEvent() {
        //this.getEventsListed();
        return (
            <div className="container">
                <div className="col col-center">
                    <div className="eventBox">
                        <div id="eventsTitle"> EVENTS </div>
                            <ul textalign="left" onLoad = {this.getEventsListed()}> {this.state.events} </ul>
                    </div>
                </div>
                <div className="col col-center">
                    <div className="buttons">
                        <button type="CSV" value="CSV" className="button" onClick={this.getEvents}>export as CSV</button>
                        <Link to="/newEvent"><button type="addE" value="addE" className="button">add event</button></Link>
                        <button type="back" value="back" className="button" onClick={this.goBack}>go back to calendar</button>
                    </div>
                </div>
            </div>
            // generate times (...idk how to do this)
            // write TIMES and EVENTS as header
            // load events (?)
        )
    }

    render() {
        return (
            <div className="day">
                {this.renderHeader()}
                {this.renderEvent()}
            </div>
        )
    }
}

export default Day;
