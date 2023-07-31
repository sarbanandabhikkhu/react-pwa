import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import MenuBar from "../icons/MenuBar";
import CrossCircle from "../icons/CrossCircle";

function Header() {
  const [show, setShow] = useState(false);
  const menuBtn = useRef();

  useEffect(() => {
    if (!show) return;
    menuBtn.style = "background:red";
    alert("useEffect: " + menuBtn.style);
  }, [show]);
  useLayoutEffect(() => {
    if (!show) return;
    menuBtn.style = "background:red";
    alert("useLayoutEffect: " + menuBtn.style);
  }, [show]);

  const handleClick = () => {
    setShow((s) => !s);
  };

  return (
    <header className="Header">
      <div className="HeaderLeft">
        <MenuBar ref={menuBtn} onClick={handleClick} />
      </div>
      <div className="HeaderRight">
        <button className="active">
          Welcome <CrossCircle />
        </button>
        <button>
          Window <CrossCircle />
        </button>
        <button>
          Page <CrossCircle />
        </button>
      </div>
    </header>
  );
}

export default Header;
