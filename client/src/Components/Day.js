import React from "react";

class Day extends React.Component {
    renderHeader() {
        return (
            <div> THIS IS THE DAY PAGE </div>
            // needs prev and next buttons
            // load date in header
            // load day of the week here
        )
    }
    renderEvent() {
        return (
            <div> EVENTS </div>
            // generate times (...idk how to do this)
            // write TIMES and EVENTS as header
            // load events (?)
        )
    }
    renderOptions() {
        return (
            <div> export csv / add event</div>
            // export as csv button (this will have to be a separate thing)
            // add event button
            // go to date 
        )
    }    
    renderFooter() {
        return(
            <div> back to calendar </div>
            // return to calendar button
        )
    }
    render() {
        return (
            <div>This is the DAY page</div>
        )
    }
}

export default Day;
