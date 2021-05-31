
import React from "react";
import '../index.css';
import './Login.css';


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
              <h1>Thank You</h1>
                <p>
                  Thank you for using 
                  <span className="inlinehatch"> HATCH</span> CHANGE for all your scheduling needs. We truly value each and every single one of our users.<br />
                </p>
              <h1>Users</h1>
		          <ul className = "no-bullets text-center">
                {this.state.userArray}
              </ul>
            </div>
        )
    }
}

export default ThankYou;
