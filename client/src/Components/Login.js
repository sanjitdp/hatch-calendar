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
        if (this.state.username !== "" && this.state.password !== "") {
            const login_options = {
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
                }),
            }

            // console.log() for debugging purposes only, can delete later
            fetch('http://localhost:3000/login', login_options).then((data) => console.log(data));
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
       
            <button type="submit" value="Submit" class="button">login</button>
        
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
