import React from "react";
import { Routes, Route } from "react-router-dom";

// import Examples from "./examples";
import Example2 from "./example2";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";

import "./styles/index.scss";

function App() {
  return (
    <div>
      {/*<Examples />*/}
      <Example2 />

      {/*<Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>*/}
    </div>
  );
}

export default App;
