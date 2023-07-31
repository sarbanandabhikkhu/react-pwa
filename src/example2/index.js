import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import "./index.scss";

function Example2() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default Example2;
