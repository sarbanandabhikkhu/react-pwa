import React from "react";

import File from "../icons/File";
import Search from "../icons/Search";
import Book from "../icons/Book";
import Books from "../icons/Books";
import Apps from "../icons/Apps";
import User from "../icons/User";
import Settings from "../icons/Settings";

function Nav({ children }) {
  return (
    <nav className="Nav">
      <div className="TopNav">
        <File />
        <Search />
        <Book />
        <Books />
        <Apps />
      </div>
      <div className="BottomNav">
        <User />
        <Settings />
      </div>
    </nav>
  );
}

export default Nav;
