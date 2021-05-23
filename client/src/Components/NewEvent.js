import React from "react";
import "../index.css";
import "./NewEvent.css";
import { Link } from 'react-router-dom';

import EventObj from './EventObj.js';

class newEvent extends React.Component {
    renderTitle() {
        return (
            <input type="text" placeholder="event title" id="ename" name="ename"></input>
        )
    }
    renderDetails() {
        return (
            <textarea rows="6" cols="50" placeholder="details" className="scrollable" id="edetails" name="edetails"></textarea>
        )
    }
    renderDate() {
        return (
            <input type="text" placeholder="date (format: MM/DD/YYYY)" id="edate" name="edate"></input>
        )
    }
    renderTimeInput() {
        return (
            <div className="grid-container">
                <div className="grid-item"><span></span></div>
                <div className="grid-item"><label>FROM </label></div>
                <div className="grid-item"><label>TO</label></div>
                <div className="grid-item"><span></span></div>
                <div className="grid-item"><span></span></div>
                <div className="grid-item"><input type="time" id="sTime" name="sTime"></input></div>
                <div className="grid-item"><input type="time" id="eTime" name="eTime"></input></div>
            </div>
        )
    }
    renderWeeklyButton() {
        return (
            <label> Make Weekly: <input type="checkbox" /> </label>
        )
    }
    renderAddEventButton() {
        return (
            <button type="submit" value="Submit" className="button" >add event</button>
        )
    }

    cancel = () => {
        document.getElementById("newEventForm").reset();
    }

    renderCancel() {
        return (
            <button type="cancel" value="cancel" className="button" onClick={this.cancel}>cancel</button>
        )
    }

    onSubmit(event) {
        event.preventDefault();

        console.log(event.target.sTime.value)

        let e = new EventObj(
            event.target.ename.value,
            event.target.edate.value,
            event.target.sTime.value,
            event.target.eTime.value,
            event.target.edetails.value
        );

        const update_Event_options = {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify({
                'dateNew': event.target.edate.value,
                'eventTitle': event.target.ename.value,
                'newInfo': e,
            }),
        }

        fetch('http://localhost:3000/DBInfo/Individual', update_Event_options)

    }

    render() {
        return (
            <div className="newEvent">
                <form onSubmit={this.onSubmit} id="newEventForm">
                    <div className="center">{this.renderTitle()}</div>
                    <div className="center">{this.renderDetails()}</div>
                    <div className="center">{this.renderDate()}</div>
                    <div className="center">{this.renderTimeInput()}</div>
                    <div className="center">{this.renderWeeklyButton()}</div>
                    <div className="center">{this.renderAddEventButton()}<span></span>{this.renderCancel()}</div>
                </form>
            </div>
        )
    }
}

export default newEvent;
