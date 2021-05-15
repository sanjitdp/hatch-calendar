import React from "react";
import './NewEvent.css';
import '../index.css';

class newEvent extends React.Component {
    renderTitle() {
        return (
            <input type="text" placeholder="event title"></input>
        )
    }
    renderDetails() {
        return (
            <textarea rows="6" cols="50" placeholder="details" class="scrollable"></textarea>
        )
    }
    renderLink() {
        return (
            <input type="text" placeholder="link"></input>
        )
    }
    renderTimeInput() { //TODO: Make this
        return (
            <div class="grid-container">
                <div class="grid-item"><span></span></div>
                <div class="grid-item"><label>FROM </label></div>
                <div class="grid-item"><label>TO</label></div>
                <div class="grid-item"><span></span></div>
                <div class="grid-item"><span></span></div>
                <div class="grid-item"><input type="time" ></input></div>
                <div class="grid-item"><input type="time" ></input></div>
            </div>
        )
    }
    renderWeeklyButton() { //TODO: method to show clicked color
        return (
            <button class="button">make weekly</button>
        )
    }
    renderAddEventButton() {
        return (
            <button class="button">add event</button>
        )
    }
    renderCancel() {
        return (
            <button class="button">&nbsp;&nbsp;cancel&nbsp;&nbsp;</button>
        )
    }

    render() {
        return (
            <div className="newEvent">
                <div class="center">{this.renderTitle()}</div>
                <div class="center">{this.renderDetails()}</div>
                <div class="center">{this.renderLink()}</div>
                <div class="center">{this.renderTimeInput()}</div>
                <div class="center">{this.renderWeeklyButton()}</div>
                <div class="center">{this.renderAddEventButton()}<span></span>{this.renderCancel()}</div>
            </div>
        )
    }
}

export default newEvent;