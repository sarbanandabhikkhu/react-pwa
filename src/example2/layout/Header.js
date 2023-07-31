import React from "react";

import Logo from "../icons/Logo";
import Search from "../icons/Search";
import MenuBar from "../icons/MenuBar";
import Cross from "../icons/Cross";

function Header({ handleSearch, showMenu, handleMenu }) {
  return (
    <header>
      <div>
        <Logo />
        <h1>DhammaChakka</h1>
      </div>
      <div>
        <Search onClick={handleSearch} />
        {!showMenu ? (
          <MenuBar onClick={handleMenu} />
        ) : (
          <Cross onClick={handleMenu} />
        )}
      </div>
    </header>
  );
}

export default Header;
