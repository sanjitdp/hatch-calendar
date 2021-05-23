import React from "react";
import '../index.css';
import './Register.css';
import egg from '../images/full_egg.png';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            confirm_password: "",
            email: "",
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleConfirmPassChange = this.handleConfirmPassChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event) {
        this.setState({ username: event.target.value });
    }

    handlePassChange(event) {
        this.setState({ password: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleConfirmPassChange(event) {
        this.setState({ confirm_password: event.target.value });
    }

    handleSubmit(event) {
        if (!/[0-9]/.test(this.state.password) || !/[a-zA-Z]/.test(this.state.password) || this.state.password.length < 8) {
            alert("Your password must be at least 8 characters long and contain at least one letter and one number.")
        }
        else if (this.state.username !== "" && this.state.password !== "" && this.state.email !== "" && this.state.password === this.state.confirm_password) {
            const register_options = {
                method: 'post',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: 'follow',
                referrer: 'no-referrer',
                body: JSON.stringify({
                    'username': this.state.username,
                    'password': this.state.password,
                    'email': this.state.email
                }),
            }

            // console.log() for debugging purposes only, delete later
            fetch('http://localhost:3000/register', register_options)
                .then((data) => (data.json()))
                .then((result) => {
                    if (result.user) {
                        window.location.href = "/eventView";
                    }
                })
        } else {
            alert("You must enter a username and password! Passwords must match!"); // TODO: separate errors
        }
        event.preventDefault();
    }
    render() {
        return (
            <div className="registerMain">
                <img src={egg} alt="register" />
                <div className="registerForm">
                    <span className="registerHeader">
                        Thank you for choosing HATCH!
</span>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input placeholder="username" type="text" value={this.state.username} onChange={this.handleUserChange} />
                        </label> <br />
                        <label>
                            <input placeholder="email" type="text" value={this.state.email} onChange={this.handleEmailChange} />
                        </label> <br />
                        <label>
                            <input placeholder="password" type="password" value={this.state.password} onChange={this.handlePassChange} />
                        </label> <br />
                        <label>
                            <input placeholder="confirm password" type="password" value={this.state.confirm_password} onChange={this.handleConfirmPassChange} />
                        </label> <br />
                        <button type="submit" value="Submit" className="button">register</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;

