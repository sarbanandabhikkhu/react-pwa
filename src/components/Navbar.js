import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div className="Navbar">
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink
        to="/dashboard"
        className={(navInfo) => (navInfo.isActive ? "active" : "")}
      >
        Dashboard
      </NavLink>
    </div>
  );
}
export default Navbar;
