import React from "react";
import { NavLink } from "react-router-dom";
import Clock from "./Clock";

function Home() {
  return (
    <div className="Home">
      <div className="container">
        <h1>Home</h1>
        <p>This is the home page</p>
        <NavLink to="/dashboard" activeClassName="active">
          Go to Dashboard
        </NavLink>
      </div>

      <div className="container">
        <Clock />
      </div>
    </div>
  );
}

export default Home;
