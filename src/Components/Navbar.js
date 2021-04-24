import { Button } from "react-bootstrap";
import React from "react";
import "../App.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid n">
          <a
            className="navbar-brand heading"
            style={{
              marginLeft: "50%",
              fontSize: "3rem",
              transform: "translate(-50%)",
            }}
            href="/"
          >
            Axios Tutorial
          </a>
          <Button
            href="https://www.npmjs.com/package/axios"
            target="_blank"
            variant="primary"
          >
            Axios library
          </Button>
        </div>
      </nav>
    </div>
  );
}
