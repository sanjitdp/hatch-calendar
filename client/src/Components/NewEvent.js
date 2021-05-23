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
    renderDetails() { //TODO: make this textarea
        return (
            <textarea rows="6" cols="50" placeholder="details" className="scrollable" id="edetails" name="edetails"></textarea>
        )
    }
    renderLink() {
        return (
            <input type="text" placeholder="link" id="elink" name="elink"></input>
        )
    }
    renderTimeInput() { //TODO: Make this
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
    renderWeeklyButton() { //TODO: method to show clicked color
        return (
            <button type="weekly" value="weekly" className="button">make weekly</button>
        )
    }
    renderAddEventButton() {
        return (
            <button type="submit" value="Submit" className="button" >add event</button>
        )
    }
    renderCancel() {
        return (
            <button type="cancel" value="cancel" className="button">&nbsp;&nbsp;cancel&nbsp;&nbsp;</button>
        )

    }

    onSubmit(event) {
        console.log(event.target.sTime.value)

        let e = EventObj(
            event.target.ename.value,
            event.target.edate.value,
            event.target.edetails.value,
            event.target.sTime.value,
            event.target.eTime.value,
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

            }),
        }

        fetch('http://localhost:3000/DBInfo/Individual', update_Event_options)
            .then((response) => response.json())
            .then((data) => {
                const currParam = (this.state.currentDate).toString();
                if (data.dateSpecific.hasOwnProperty(currParam)) {

                    var desiredValue = data.dateSpecific[currParam];
                } else {
                    //Handle no value loadable

                }


            });

    }

    render() {
        return (
            <div className="newEvent">
                <form onSubmit={this.onSubmit}>
                    <div className="center">{this.renderTitle()}</div>
                    <div className="center">{this.renderDetails()}</div>
                    <div className="center">{this.renderLink()}</div>
                    <div className="center">{this.renderTimeInput()}</div>
                    <div className="center">{this.renderWeeklyButton()}</div>
                    <div className="center">{this.renderAddEventButton()}<span></span>{this.renderCancel()}</div>
                </form>
            </div>
        )
    }
}

export default newEvent;
