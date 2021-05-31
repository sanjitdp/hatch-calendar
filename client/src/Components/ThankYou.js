
import React from "react";
import '../index.css';
import './ThankYou.css';

import chick from '../images/chick1.png';


class ThankYou extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userArray: [],
        };

        this.loadUsernames = this.loadUsernames.bind(this);


    }

    componentDidMount(){
      this.loadUsernames();
    }


    loadUsernames(){
      const user_options = {
        method: 'get',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        referrer: 'no-referrer',
      }
      fetch('http://localhost:3000/users', user_options)
        .then((response) => response.json())
        .then((data) => {
          var array_of_users = [];
          for(var username of data){
            array_of_users.push(<li>{username}</li>);
          }
          this.setState({
            userArray: array_of_users
          });
      })
    }


    render() {
        return (
            <div className="wording">
              <h1>thank you.</h1>
                <p>
                  Thank you for choosing 
                  <span className="inlinehatch"> hatch</span> for all your scheduling needs.  <br></br>
                  We truly value each and every single one of our users.<br />
                </p>
                  <img src={chick} className="chick-logo" alt="Chick Logo" />
              <h1>users</h1>
              <br></br>
              <ul className ="userList">
                  {this.state.userArray}
              </ul>
            </div>
        )
    }
}

export default ThankYou;
