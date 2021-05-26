import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./index.css";
import "./Components/Calendar.css"
import Login from './Components/Login';
import NewEvent from './Components/NewEvent';
import Home from './Components/Home';
import Register from './Components/Register';
import EventView from './Components/EventView';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            redirection: null
        }
    }
    async checkAuth(propType){
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
                    redirection: <Redirect to="/login"/>
                })
            }else{
                this.setState({
                    redirection: propType
                })
            }
        });
        
    }
    render() {

        return (
            <Router>
                <div className = "bg-yellow">
                    <h1 className = "bg-yellow">hatch calendar</h1>
                    <nav className="navbar navbar-expand-lg navbar-light navbar-yellow bg-yellow">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link">home</Link></li>
                            <li><Link to={'/login'} className="nav-link">login</Link></li>
                            <li><Link to={'/register'} className="nav-link">register</Link></li>
                            <li><Link to={'/eventView'} className="nav-link">event view</Link></li>
                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/newEvent' render={() => {
                            this.checkAuth(<NewEvent />);
                            return this.state.redirection}}/>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/eventView' render={() => {
                            this.checkAuth(<EventView/>);
                            return this.state.redirection}}/>
                        <Redirect from="*" to={"/"} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
