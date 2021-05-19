import React from "react";
import "./Day.css";
import {Link} from 'react-router-dom'

class Day extends React.Component {
    renderHeader() {
        const DateFormat = "MMMM YYYY";
        return (
            <div className="header row flex-middle">
            <div className="col col-start" id="growIcons" >
              <div className="icon" onClick={this.prevDay}>
                chevron_left
              </div>
            </div>
            <div className="col col-center">
                <span> DATE! </span>
            </div>
            <div className="col col-end" id="growIcons" onClick={this.nextDay}>
              <div className="icon" >chevron_right</div>
            </div>
            </div>
      );
            // needs prev and next buttons to actually go to prev / next day
            // load date in header
            // load day of the week here 
    }
    renderHeader2() {
        return(
        <div className="header2 row flex-middle">
            <div className="col col-center"  >
                <div id="weekdayBanner"> day of the week </div>
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
                        <Link to = 'newEvent'>	
				<button type="addE" value="addE" class="button">add event</button>
                	</Link>
		        <Link to = '/calendar'>
				<button type="addE" value="addE" class="button">go back to calendar</button>
                    	</Link>
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
            <div className = "day"> 
                {this.renderHeader()}
                {this.renderHeader2()}
                {this.renderEvent()}
            </div>
        )
    }
}

export default Day;
