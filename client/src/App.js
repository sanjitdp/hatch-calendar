import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./index.css";
import "./Components/Calendar.css"
import Login from './Components/Login';
import newEvent from './Components/NewEvent';
import Home from './Components/Home';
import Register from './Components/Register';
import eventView from './Components/EventView';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Hatch Calendar</h1>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link">Home</Link></li>
                            <li><Link to={'/login'} className="nav-link">Login</Link></li>
                            <li><Link to={'/register'} className="nav-link">Register</Link></li>
                            <li><Link to={'/eventView'} className="nav-link">Event View</Link></li>
                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/newEvent' component={newEvent} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/eventView' component={eventView} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
