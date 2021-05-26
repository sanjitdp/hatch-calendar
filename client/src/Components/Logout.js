import React from "react";
import sunny from '../images/sunny.png';
import './Home.css';
import '../index.css';

class Logout extends React.Component {
  render() {
    return (
      <div className="wording">
        <span></span>
        <img src={sunny} alt="login" />
        <p className="hatch">
          username
          <p><span></span>
          <span></span>
          </p>
          
		</p>
        <p>
        <br></br>
        Thank you for choosing <span className="inlinehatch">HATCH</span>, the interactive calendar for all your scheduling needs. <br />
		Come back soon!
        <br></br>
		</p>
        <div><button className = 'button'>logout</button></div>
        <span></span>
      </div>
    )
  }
}

export default Logout;

