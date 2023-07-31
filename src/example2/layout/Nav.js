import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Bell from "../icons/Bell";
import Bulb from "../icons/Bulb";

function Nav({ handleMenu }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" onClick={handleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={handleMenu}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" onClick={handleMenu}>
            Dashboard
          </NavLink>
        </li>
        <AuthNav
          name="Resources"
          links={["Documentation", "Guide"]}
          handleMenu={handleMenu}
        />
        <AuthNav
          name="Version"
          links={["v2.0.10", "v1.0.0"]}
          handleMenu={handleMenu}
        />
      </ul>
      <div className="language">
        <Bell />
        <select>
          <option>English</option>
          <option>Bengali</option>
        </select>
      </div>
      <div className="theme-switch">
        <p>Appearance</p>
        <div></div>
      </div>
      <div className="social-icons">
        <NavLink to="https://sarbanandabhikkhu.github.com" onClick={handleMenu}>
          <Bulb />
        </NavLink>
        <NavLink to="https://youtube.com" onClick={handleMenu}>
          <Bell />
        </NavLink>
      </div>
    </nav>
  );
}

function AuthNav({ name, links, handleMenu }) {
  const [showAuth, setShowAuth] = useState(false);

  const handleAuth = (e) => {
    setShowAuth(!showAuth);
  };

  return (
    <li>
      <button className={showAuth ? "active" : ""} onClick={handleAuth}>
        {name}
        <span>{showAuth ? "-" : "+"}</span>
      </button>
      {showAuth && (
        <div>
          {links.map((link) => (
            <NavLink to={"/" + link.toLowerCase()} onClick={handleMenu}>
              {link}
            </NavLink>
          ))}
        </div>
      )}
    </li>
  );
}

export default Nav;
