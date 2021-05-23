import { setDate } from "date-fns";
import React from "react";
import "./Day.css";
import {Link} from 'react-router-dom';

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passDate: props.setDate,
            currentDate: props.currentDate,
            events: null
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
        fetch('http://localhost:3000/DBInfo/Specific', daily_options)
            .then((response) => response.json())
            .then((data) => {
                const currParam = (this.state.currentDate).toString();
                if(data.dateSpecific.hasOwnProperty(currParam)){

                    var desiredValue = data.dateSpecific[currParam];
                    var ListOfKeys = Object.keys(desiredValue);
                    this.setState({ 
                        events: ListOfKeys.map((value)=>{ return <li>{value}</li>})
                    })

                }
                

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
                            <ul onLoad = {this.getEventsListed()}> {this.state.events} </ul>
                    </div>
                </div>
                <div className="col col-center">
                    <div className="buttons">
                        <button type="CSV" value="CSV" className="button" onClick={this.getEvents}>export as CSV</button>
                        <Link to="/newEvent"><button type="addE" value="addE" className="button">add event</button></Link>
                        <button type="back" value="back" className="button" onClick={this.getEventsListed}>go back to calendar</button>
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
