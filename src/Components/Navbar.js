import React from "react";
import "../App.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid n">
          <div
            className="navbar-brand heading"
            style={{
              marginLeft: "50%",
              fontSize: "3rem",
              transform: "translate(-50%)",
            }}
          >
            Axios Tutorial
          </div>
        </div>
      </nav>
    </div>
  );
}
