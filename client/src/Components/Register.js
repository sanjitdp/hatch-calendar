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
<div className="registerMain">
<img src={egg} alt="register" />
            <div className="registerForm">
<span className="registerHeader">
Thank you for choosing Hatch!
</span>
                <form onSubmit={this.handleSubmit}>
                    <label>
                         <input placeholder="email" type="text" value={this.state.username} onChange={this.handleUserChange} />
                    </label> <br />
                    <label>
                         <input placeholder="password" type="password" value={this.state.password} onChange={this.handlePassChange} />
                    </label> <br />
			<label>
                         <input placeholder="confirm password" type="password" value={this.state.password} onChange={this.handlePassChange} />
                    </label> <br />

                    <input type="submit" value="register" />
                </form>
            </div>
</div>
        );
    }
}

export default Register;

