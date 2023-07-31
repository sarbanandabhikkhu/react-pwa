import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Logo from "../icons/Logo";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
