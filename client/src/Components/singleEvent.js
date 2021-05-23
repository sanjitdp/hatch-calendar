import React from "react";
import "../index.css";
import "./NewEvent.css";
import "./Calendar.css";
import { Link } from 'react-router-dom';

class singleEvent extends React.Component {
    renderTitle() {
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <button className="button">back to calendar</button>
                </div>
                <div className="col col-center">
                    <div className="title">EVENT</div>
                    <div>MM/DD/YYYY</div>
                </div>
                <div className="col col-end">
                    <button className="button">back to date</button>
                </div>
            </div>
        )
    }
    renderDetails() {
        return (
            <div>
                <div><label>DETAILS</label></div>
                <textarea rows="15" cols="50" placeholder="details" className="scrollable" id="edetails" name="edetails"></textarea>
            </div>
        )
    }
    renderLink() {
        return (
            <button className="button">event link</button>
        )
    }
    renderEditEventButton() {
        return (
            <Link to="/editEvent"><button className="button">edit</button></Link>
        )
    }
    render() {
        return (
            <div className="newEvent">
                <div className="center">{this.renderTitle()}</div>
                <div className="center">{this.renderDetails()}</div>
                <div className="center">{this.renderLink()}</div>
                <div className="center">{this.renderEditEventButton()}</div>
            </div>
        )
    }
}

export default singleEvent;


