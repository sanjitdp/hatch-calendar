
import React from "react";
import '../index.css';
import './Login.css';


class ThankYou extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userArray: {},
        };


    }


        render() {
          return (
            <div className="wording">
              <h1>Thank You</h1>
              <p>
              Thank you for using 
              <span className="inlinehatch"> HATCH</span> CHANGE for all your scheduling needs. We truly value each and every single one of our users.<br />
              </p>
              <h1>Users</h1>
        <p>
		<ul className = "no-bullets">
            {/* //{this.state} */}
            
        </ul>
		</p>
            </div>
            
          )
        }
}

export default ThankYou;
