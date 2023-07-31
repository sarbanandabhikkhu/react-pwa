import React from "react";
import Monk from "../../images/monk.gif";

function Hero() {
  return (
    <section className="hero">
      <img className="monk" src={Monk} />
    </section>
  );
}

export default Hero;
