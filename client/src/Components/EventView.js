import React from "react";
import Calendar from "./Calendar";
import Day from "./Day";

class EventView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentDate: "",
        }
    }

    setDate = (whatDate) => {
        this.setState({ currentDate: whatDate })
    }

    render() {
        if (this.state.currentDate === "") {
            return (<Calendar setDate={this.setDate} />)
        } else {
            return (<Day key={this.state.currentDate} currentDate={this.state.currentDate} setDate={this.setDate} />)
        }
    }
}

export default EventView;