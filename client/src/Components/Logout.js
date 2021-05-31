import React from "react";
import sunny from '../images/sunny.png';
import './Home.css';
import '../index.css';
import { Redirect, withRouter } from 'react-router-dom';

//TO DO: Fetch the username and display it
//Add logout functionality


class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    async checkAuth() {
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
                        user: undefined
                    })
                } else {
                    this.setState({
                        user: result.user.username
                    })
                }
            });

    }

    handleSubmit(event) {
        const logout_options = {
            method: 'get',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            referrer: 'no-referrer'
        };
        if (this.state.user !== undefined) {
            console.log("Asdf")
            // console.log() for debugging purposes only, can delete later
            fetch('http://localhost:3000/logout', logout_options)
        } else {
            alert("You must log in first!");
        }
        event.preventDefault();
    }

    render() {
        this.checkAuth();
        if (this.state.user === undefined) {
            return (<Redirect to="/" />)
        }
        return (
            <div className="wording">
                <span></span>
                <img src={sunny} alt="login" />
                <p className="logout">
                    goodbye, {this.state.user}
                </p>
                <span></span>
                <br />
                <p className="home-text">
                    <br></br>
                    Thank you for choosing <span className="inlinehatch">hatch</span>, the interactive calendar for all your scheduling needs.
                </p>
                <br />
                <div>
                    <form onSubmit={() => { this.handleSubmit() }}>
                        <span className="home-text">Come back soon!</span>
                        <span />
                        <button type="submit" value="Submit" className="button">log out</button>
                    </form>
                </div>
                <span></span>
            </div>
        )
    }
}

export default Logout;

