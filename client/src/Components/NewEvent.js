import React from "react";
import "../index.css";
import "./NewEvent.css";

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
            <button type="submit" value="Submit" className="button">add event</button>
        )
    }
    renderCancel() {
        return (
            <button type="cancel" value="cancel" className="button">&nbsp;&nbsp;cancel&nbsp;&nbsp;</button>
        )
    }

    render() {
        return (
            <div className="newEvent">
                <form>
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