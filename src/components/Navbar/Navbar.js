import React, { useState } from "react";
import logo from "../../logo.svg";

const Navbar = (props) => {
  const [collapse, setCollapse] = useState("collapse");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => {
            props.history.push("/items-menu");
          }}
        >
          <img src={logo} width="42px" height="42px" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            if (collapse !== "collapse") {
              setCollapse("collapse");
            } else {
              setCollapse("");
            }
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${collapse} navbar-collapse`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li
              className={`nav-item ${
                props.history.location.pathname.trim().replace("/#/g", "") ===
                "/items-menu"
                  ? "active"
                  : ""
              }`}
            >
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  props.history.push("/items-menu");
                }}
              >
                ItemsMenu <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className={`nav-item ${
                props.history.location.pathname.trim().replace("/#/g", "") ===
                "/check-out"
                  ? "active"
                  : ""
              }`}
            >
              <a
                className="nav-link"
                href="#"
                onClick={() => {
                  props.history.push("/check-out");
                }}
              >
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
