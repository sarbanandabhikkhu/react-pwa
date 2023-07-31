import React from "react";

import MenuDots from "../icons/MenuDots";
import AngleRight from "../icons/AngleRight";
import Folder from "../icons/Folder";
import File from "../icons/File";

function Aside() {
  return (
    <aside className="Aside">
      <div className="TopAside">
        <h2>Explorer</h2>
        <div className="TopAsideAction">
          <MenuDots />
        </div>
      </div>
      <div className="BottomAside">
        <div className="BottomAsideFolder">
          <AngleRight />
          <Folder />
          <span>Folder</span>
        </div>
        <div className="BottomAsideFile">
          <File />
          <span>File 1</span>
        </div>
        <div className="BottomAsideFile">
          <File />
          <span>File 2</span>
        </div>
        <div className="BottomAsideFile">
          <File />
          <span>File 3</span>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
