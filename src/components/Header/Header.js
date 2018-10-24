import React from "react";
import "./Header.css";

const Header = props => (
  <nav className="navbar fixed-top">
    <div className="nav navbar-nav navbar-left">
      <a href="/">Clicky Game</a>
    </div>
    <div className="nav navbar-nav navbar-center">
      <span className="navbar-text">Click on a Laker legend to start game</span>
    </div>
    <div className="nav navbar-nav navbar-right text-light">
      <form className="form-inline">
        {props.loser}
        <span className="score">Score: {props.score} | Top Score: {props.topScore} </span>
      </form>
    </div>
  </nav>
);

export default Header;