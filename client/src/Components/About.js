import React from "react";
import './Home.css';
import '../index.css';
class About extends React.Component {
    render() {
        return (
            <div className="wording">
                <h1>what is hatch?</h1>
                <p>
                    Built for UCLA's CS35L Spring '21 utilizing React.js and MongoDB,<br />
                    <span className="inlinehatch">hatch</span> is an interactive full stack calendar application for all your scheduling needs. <br />
                </p>
                <h1>features</h1>
                <p>
                    <ul className="no-bullets">
                        <li>
                            Add your personal events
            </li>
                        <li>
                            Create weekly events
            </li>
                        <li>
                            Export your day's schedule as a CSV file
            </li>
                        <li>
                            Export your day's schedule as an email
            </li>
                    </ul>
                </p>
                <h1>contributors</h1>
                <p>
                    <ul className="no-bullets">
                        <li>
                            Sanjit Dandapanthula, Mathematics 2024
            </li>
                        <li>
                            Vinay Shukla, CSE 2024
            </li>
                        <li>
                            Anna Anderson, CE 2023
            </li>
                        <li>
                            Nitya Simhadri, CS 2023
            </li>
                        <li>
                            Katie Stahnke, CE 2023
            </li>
                    </ul>
                    <span></span>
                </p>
            </div>
        )
    }
}

export default About;

