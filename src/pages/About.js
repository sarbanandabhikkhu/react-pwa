import React from "react";
import Layout from "../components/layout";
import sutta_sangaho from "../data/sutta_sangaho.json";

function About() {
  console.log(sutta_sangaho);
  return (
    <Layout>
      <h2>About Page</h2>
      <p>This is About Page.</p>
      {sutta_sangaho.map(({ tagName, attributes, innerText }) => {
        {
          if (tagName === "h1") return <h1>{innerText}</h1>;
          if (tagName === "h2") return <h2>{innerText}</h2>;
          if (tagName === "h3") return <h3>{innerText}</h3>;
          if (tagName === "p")
            return <p>{innerText}</p>;
        }
      })}
    </Layout>
  );
}

export default About;
