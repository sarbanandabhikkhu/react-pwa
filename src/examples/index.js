import React from "react";

import Layout from "./layout";
import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Aside from "./layout/Aside";
import Main from "./layout/Main";
import Footer from "./layout/Footer";


import "./index.scss";

function Examples() {
  return (
    <div className="Examples">
      <Layout>
        <Header />
        <Nav />
        <Aside />
        <Main>Main</Main>
        <Footer />
      </Layout>
    </div>
  );
}

export default Examples;
