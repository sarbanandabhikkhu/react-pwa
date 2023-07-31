import React from "react";

import Search from "../icons/Search";
import CrossSmall from "../icons/CrossSmall";

function SearchPage({ handleSearch }) {
  return (
    <div className="search">
      <div className="search-bar">
        <div className="search-input">
          <Search />
          <input
            className="text-input"
            type="text"
            placeholder="Type here..."
          />
          <CrossSmall />
        </div>
        <button onClick={handleSearch}>Cancel</button>
      </div>
      <div className="search-container">
        <h3 className="search-label">Guide & Documentation</h3>
        <ul>
          <li onClick={handleSearch}>
            <Search />
            <div>
              <h3>Lorem aute dolore eiusmod dolor culpa sint</h3>
              <p>Incididunt culpa ullamco occaecat reprehenddolo tempor</p>
            </div>
          </li>
          <li onClick={handleSearch}>
            <Search />
            <div>
              <h3>Lorem aute dolore eiusmod dolor elit culpa sint</h3>
              <p>Incididunt culpa enim occaecat reprehenderit amet tempor</p>
            </div>
          </li>
          <li onClick={handleSearch}>
            <Search />
            <div>
              <h3>Lorem dolore eiusmod dolor culpa sint</h3>
              <p>Incididunt ullamco enim occaecat amet tempor</p>
            </div>
          </li>
        </ul>
        <div className="search-footer">
          <p>
            Search by <b>SN Search</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
