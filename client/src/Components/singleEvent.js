import React from "react";
import "../index.css";
import "./NewEvent.css";
import "./Calendar.css";
import {Link} from 'react-router-dom'

class singleEvent extends React.Component {
    renderTitle() {
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <button class="button">back to calendar</button>
                </div>
                <div className="col col-center">
                    <div class = "title">EVENT</div>
                    <div>MM/DD/YYYY</div>
                </div>
                <div className="col col-end">
                    <button class="button">back to date</button>
                </div>
            </div>
        )
    }
    renderDetails() { 
        return (
            <div>
                <div><label>DETAILS</label></div>
                <textarea rows="15" cols="50" placeholder="details" class="scrollable" id="edetails" name="edetails"></textarea>
            </div>
        )
    }
    renderLink() {
        return (
            <button class ="button">event link</button>
        )
    }
    renderEditEventButton() {
        return (
            <button class="button">edit</button>
	    )
    }
    render() {
        return (
            <div className="newEvent">
                <div class= "center">{this.renderTitle()}</div>
                <div class = "center">{this.renderDetails()}</div>
                <div class = "center">{this.renderLink()}</div>
                <div class = "center">{this.renderEditEventButton()}</div>
            </div>
        )
   }
}

export default singleEvent;


