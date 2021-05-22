import React from "react";
import egg from '../images/hatched_egg.png';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className="wording">
        <img src={egg} alt="login" />
        <p className="hatch">
          HATCH
		</p>

        <p>
          Welcome to <span className="inlinehatch">HATCH</span>, the interactive calendar for all your scheduling needs. <br />
		We invite you to come hatch your plans with us and see your goals come to fruition.
		</p>
        <a href="/login"> login </a>
        <p>
          Don't have an account?
		<a href="/register"> Register </a>
        </p>
      </div>
    )
  }
}

export default Home;

