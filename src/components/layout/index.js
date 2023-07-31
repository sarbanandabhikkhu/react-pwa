import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Hero />
      <div className="main">{children}</div>
      <Footer />
      <Outlet />
    </>
  );
}

export default Layout;
