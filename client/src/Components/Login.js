import React from "react";
import '../index.css';
import './Login.css'
import egg from '../images/full_egg.png';
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
<div className="loginPageMain">
<img src={egg} alt="login" />
            <div className="loginForm">
<span>
Welcome Back!
</span>
                <form onSubmit={this.handleSubmit}>
                    <label>
                         <input placeholder="email" type="text" value={this.state.username} onChange={this.handleUserChange} />
                    </label> <br /><br />
                    <label>
                         <input placeholder="password" type="password" value={this.state.password} onChange={this.handlePassChange} />
                    </label> <br /><br />
                    <input type="submit" value="login" />
                </form>
            </div>
</div>
        );
    }
}

export default Login;
