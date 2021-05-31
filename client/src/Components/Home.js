import React from "react";
import { Link } from "react-router-dom";
import egg from '../images/hatched_egg.png';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="wording">
        <img src={egg} className="egg-logo" alt="Hatch Egg Logo" />
        <p className="hatch">
          hatch.
	    	</p>

        <p className="home-text">
          Welcome to <span className="inlinehatch">hatch</span>, the interactive calendar for all your scheduling needs. <br />
		    We invite you to come hatch your plans with us and see your goals come to fruition.
		    </p>


        <div className="center">
          <form onSubmit={this.handleSubmit}>
            <Link to="/login">
              <button type="submit" value="Submit" className="button">log in!</button>
            </Link>

            <span /><span />
            <span className="home-text">Don't have an account?</span>
            <Link to="/register">
              <button type="submit" value="Submit" className="button">register!</button>
            </Link>
          </form>
          {/* <Link to="/login" className="home-link"> log in. </Link> <span /> */}


        </div>
        <br />
      </div>
    )
  }
}

export default Home;

