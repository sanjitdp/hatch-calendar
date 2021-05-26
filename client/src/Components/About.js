import React from "react";
import './Home.css';

class About extends React.Component {
  render() {
    return (
      <div className="wording">
        <p className="hatch">
          What is HATCH?
		</p>
        <p>
        <span className="inlinehatch">HATCH</span> is an interactive calendar for all your scheduling needs. <br />
        FEATURES:
		<ul>
            <li>
                Add your personal events
            </li>
            <li>
                Export your day's schedule as a CSV file
            </li>
            <li>
                Export your day's schedule as an email
            </li>
        </ul>
		</p>
        <p>
        CONTRIBUTERS:<br />
        Built for CS35L Spring 2021 at UCLA<br />
        <ul>
            <li>
                Vinay Shukla, CS 2024
            </li>
            <li>
                Sanjit Dandapanthula, CS 2024
            </li>
            <li>
                Nitya Simhadri, CS 2023
            </li>
            <li>
                Katie Stahnke, CE 2023
            </li>
            <li>
                Anna Anderson, CE 2023
            </li>
        </ul>
        </p>
      </div>
    )
  }
}

export default About;

