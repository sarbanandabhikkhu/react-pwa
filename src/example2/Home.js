import React from "react";
import { Link } from "react-router-dom";

import Logo from "./icons/Logo";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="logo">
          <Logo />
        </div>
        <h1>DhammaChakka</h1>
        <h2>
          Next Generation
          <br />
          Learn Buddhism
        </h2>
        <p>
          Get ready for a good Learning environment that can finally catch up
          with you.
        </p>
        <div className="hero-buttons">
          <Link to="/start">Get Started</Link>
          <Link to="/why">Why DhammaChakka?</Link>
          <Link to="https://sarbanandabhikkhu.github.com">View on GitHub</Link>
        </div>
      </div>
      <div className="topics">
        <div className="item">
          <Logo />
          <h3>Instant Server Restart</h3>
          <p>On demand file serving over Native ESM, no bundling required.</p>
        </div>
        <div className="item">
          <Logo />
          <h3>Lightning First HMR</h3>
          <p>
            Hot Module Replacement (HMR) that stays first regardless of app
            size.
          </p>
        </div>
        <div className="item">
          <Logo />
          <h3>Rich Features</h3>
          <p>Out-of-the-box support for TypeScript, JSX, CSS and more.</p>
        </div>
        <div className="item">
          <Logo />
          <h3>Optimized Build</h3>
          <p>
            Pre-configured Rollup build with multi-page and library mode
            support.
          </p>
        </div>
        <div className="item">
          <Logo />
          <h3>Universal Plugins</h3>
          <p>Rollup-superset plugin interface shared between dev and build.</p>
        </div>
        <div className="item">
          <Logo />
          <h3>Fully Typed APIs</h3>
          <p>Flexible programmatic APIs with full TypeScript typing.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
