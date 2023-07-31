import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SearchPage from "./Search";
import Nav from "./Nav";

function Layout() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <React.Fragment>
      <Header
        handleSearch={handleSearch}
        showMenu={showMenu}
        handleMenu={handleMenu}
      />
      {showSearch && <SearchPage handleSearch={handleSearch} />}
      {showMenu && <Nav handleMenu={handleMenu} />}
      <Outlet />
    </React.Fragment>
  );
}

export default Layout;
