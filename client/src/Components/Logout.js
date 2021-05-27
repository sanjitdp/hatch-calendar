import React from "react";
import sunny from '../images/sunny.png';
import './Home.css';
import '../index.css';

//TO DO: Fetch the username and display it
//Add logout functionality


class Logout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }
    async checkAuth(){
        const verify_options = {
            method: 'get',
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            referrer: 'no-referrer'
        }
        await fetch('http://localhost:3000/login/verify', verify_options)
        .then((data) => (data.json()))
        .then((result) => {
            if (result.user === undefined) {
                this.setState({
                    user: null
                })
            }else{
                this.setState({
                    user: result.user.username
                })
            }
        });
        
    }
    render() {
        this.checkAuth();
        return (
            <div className="wording">
                <span></span>
                <img src={sunny} alt="login" />
                <p className="logout">
                    hello, {this.state.user}
                <p><span></span>
                
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

