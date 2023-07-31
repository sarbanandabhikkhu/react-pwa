import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";

function NoMatch() {
  return (
    <Layout>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Layout>
  );
}

export default NoMatch;
