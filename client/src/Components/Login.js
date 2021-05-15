import React from "react";
import '../index.css';
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange(event) {
        this.setState({ username: event.target.value });
    }

    handlePassChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.username != "" && this.state.password != "") {
            console.log(this.state.username);
            console.log(this.state.password);
        } else {
            alert("You must enter a username and password!");
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className="loginForm">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username: <input type="text" value={this.state.username} onChange={this.handleUserChange} />
                    </label> <br /><br />
                    <label>
                        Password: <input type="password" value={this.state.password} onChange={this.handlePassChange} />
                    </label> <br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Login;