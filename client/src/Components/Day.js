import React from "react";
import "./Day.css";
import * as dateFns from "date-fns";

class Day extends React.Component {
    
    renderHeader() {
        const DateFormat = "MMDDYYYY";
        //TO DO: make the chevrons bigger
        return (
            <div className="header row flex-middle">
            <div className="col col-start" >
              <div id="growIcons" className="icon" onClick={this.prevDay}> chevron_left</div>
            </div>
            <div className="col col-center">
                <span id="makeDateSmall"> DATE! </span>
            </div>
            <div className="col col-end" onClick={this.nextDay}>
              <div id="growIcons" className="icon">chevron_right</div>
            </div>
            </div>
      );
            // needs prev and next buttons to actually go to prev / next day
            // load date in header
    }
    renderHeader2() {
        const formattedDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return(
        <div className="header2 row flex-middle">
            <div className="col col-center"  >
                <div id="weekdayBanner">
                    {formattedDays[6]}
                </div>
            </div>
        </div>
        );
    }
    renderEvent() {
        return (
            <div className = "container">
                <div className="col col-center"> 
                    <div className = "eventBox">
                        <div id="eventsTitle"> EVENTS </div> 
                        <textarea rows="18" cols="50" placeholder="EVENTS" class="scrollable" id="edetails" name="edetails"></textarea>
                    </div>
                </div>
                <div className = "col col-center">
                    <div className="buttons"> 
                        <button type="CSV" value="CSV" class="button">export as CSV</button>
                        <button type="addE" value="addE" class="button">add event</button>
                        <div className="goToDay">
                            <textarea rows="1" cols="15" placeholder="MM/DD/YYYY" id="edetails" name="edetails"></textarea>
                            <button type="addE" value="addE" class="button"> GO
                            </button>
                            {}
                        </div>
                    </div>
                </div>
            </div>
            // make dropdown menu for goToDay button
            // load events + times 
        )
    }

    renderFooter() {
        return (
            <div className = "col col-center">
                <div className="footer">
                     <button type="addE" value="addE" class="button">back to calendar</button>
                </div>
            </div>

        )
    }

    render() {
        return (
            <div className = "day"> 
                {this.renderHeader()}
                {this.renderHeader2()}
                {this.renderEvent()}
                {this.renderFooter()}
            </div>
        )
    }
}

export default Day;
