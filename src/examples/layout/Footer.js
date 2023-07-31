import React from "react";

import Logo from "../icons/Logo";
import Clock from "../icons/Clock";
import Bulb from "../icons/Bulb";
import Bell from "../icons/Bell";

function Footer({ children }) {
  return (
    <footer className="Footer">
      <div className="FooterLeft">
        <Logo />
        <h1>DhammaChakka</h1>
      </div>
      <div className="FooterRight">
        <Clock />
        <Bulb />
        <Bell />
      </div>
    </footer>
  );
}

export default Footer;
