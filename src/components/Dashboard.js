import React from "react";
import Content from "./Content";

function Dashboard({ title }) {
  return (
    <div className="Dashboard">
      <div className="container">
        <h1>{title}</h1>
        <p>This is the dashboard page</p>
      </div>
      <div className="container">
        <Content />
      </div>
    </div>
  );
}
export default Dashboard;
